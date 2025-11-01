import { Post } from "../types/post";

export const getPost = async (slug: string): Promise<Post | null> => {
  try {
    const { metadata } = await import(`../../post/${slug}/page.mdx`);

    return {
      slug,
      ...metadata,
    };
  } catch {
    return null;
  }
};
