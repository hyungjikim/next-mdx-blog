import { readdir } from "fs/promises";
import path from "path";
import { Post } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  const postPath = path.resolve(process.cwd(), "app", "post");

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory()
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../../post/${name}/page.mdx`);
      return {
        slug: name,
        ...metadata,
      };
    })
  );

  posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  return posts;
};
