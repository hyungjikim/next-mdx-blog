import Link from "next/link";
import { Post } from "../types/post";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <ul className="space-y-3">
      {posts.map(({ title, slug, publishDate }) => (
        <li key={title}>
          <Link href={`/post/${slug}`} className="flex justify-between p-2">
            <span className="text-gray-900 font-medium hover:text-gray-500 transition-colors">
              {title}
            </span>
            <span className="text-gray-500">
              {new Intl.DateTimeFormat("ko-KR").format(new Date(publishDate))}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
