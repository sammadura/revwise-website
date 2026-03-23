import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://getrevwise.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const PostContent = post.content;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://getrevwise.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RevWise',
      url: 'https://getrevwise.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://getrevwise.com/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://getrevwise.com/blog/${post.slug}`,
    },
    image: 'https://getrevwise.com/og-image.png',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-gray-light min-h-screen">
        {/* Post Header */}
        <header className="bg-dark text-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="text-gray-400 hover:text-primary transition-colors text-sm mb-6 inline-flex items-center gap-1"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex items-center gap-3 mt-6 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>{post.author}</span>
              <span>&middot;</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Post Body */}
        <div className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="prose prose-lg max-w-none">
              <PostContent />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-dark rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
                Ready to Automate Your Review Collection?
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                See how your Google reviews compare to local competitors with a
                free, instant audit.
              </p>
              <Button href="/audit" variant="primary">
                Get Your Free Review Audit
              </Button>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="pb-16 md:pb-24">
            <div className="container-custom">
              <h2 className="text-2xl font-bold font-heading mb-8">
                More from the Blog
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group bg-white rounded-2xl border border-gray-border overflow-hidden card-hover"
                  >
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {relPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mt-3 font-heading">
                        {relPost.title}
                      </h3>
                      <p className="text-gray-medium text-sm mt-2 line-clamp-2">
                        {relPost.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
