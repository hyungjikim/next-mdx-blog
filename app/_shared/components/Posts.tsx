import Link from "next/link";
import { Post } from "../types/post";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <ul className="space-y-3">
      {posts.map(({ title, slug }) => (
        <li key={title}>
          <Link href={`/post/${slug}`} className="block p-2">
            <span className="text-gray-900 font-medium hover:text-gray-500 transition-colors">
              {title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
