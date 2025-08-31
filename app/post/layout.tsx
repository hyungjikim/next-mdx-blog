import Link from "next/link";
import UtterancesComments from "../_shared/components/UtterancesComments";
import { Home } from "lucide-react";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 hover:text-gray-500 transition-colors"
      >
        <Home /> <span>홈으로</span>
      </Link>
      {children}
      <UtterancesComments key="post-comments" repo="hyungjikim/next-mdx-blog" />
    </>
  );
}
