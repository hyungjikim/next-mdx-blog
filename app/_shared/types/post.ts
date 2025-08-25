export interface Post {
  title: string;
  description?: string;
  publishDate: string;
  alternates: {
    canonical: string;
  };
  slug: string;
}
