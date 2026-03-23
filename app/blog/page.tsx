import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'RevWise Blog — Google Review Tips for Local Businesses',
  description:
    'Practical guides and strategies to help local businesses get more Google reviews, improve their online reputation, and grow through search.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'RevWise Blog — Google Review Tips for Local Businesses',
    description:
      'Practical guides and strategies to help local businesses get more Google reviews and grow through search.',
    url: 'https://getrevwise.com/blog',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-gray-light min-h-screen">
      {/* Header */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Blog
          </p>
          <h1 className="heading-xl text-white max-w-3xl">
            Google Review Tips for Local Businesses
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            Practical strategies to get more reviews, rank higher on Google, and
            turn your online reputation into a growth engine.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-border overflow-hidden card-hover"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-medium">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-3 font-heading">
                    {post.title}
                  </h2>
                  <p className="text-gray-medium text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-gray-medium"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
              See How Your Reviews Stack Up
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Get a free, instant audit of your Google Business Profile and find
              out exactly where you stand against your local competitors.
            </p>
            <Button href="/audit" variant="primary">
              Get Your Free Review Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
