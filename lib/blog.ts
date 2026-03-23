import { ReactNode } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  content: () => ReactNode;
}

// Registry of all blog posts — import and add new posts here
import { post as hvacPost } from '@/content/blog/how-to-get-more-google-reviews-hvac';
import { post as plumbingPost } from '@/content/blog/how-to-get-more-google-reviews-plumbing';
import { post as roofingPost } from '@/content/blog/how-to-get-more-google-reviews-roofing';
import { post as googleVsYelpPost } from '@/content/blog/google-reviews-vs-yelp-local-business';
import { post as negativeReviewsPost } from '@/content/blog/how-to-respond-negative-google-reviews';

const posts: BlogPost[] = [hvacPost, plumbingPost, roofingPost, googleVsYelpPost, negativeReviewsPost];

// Sorted newest first
export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}
