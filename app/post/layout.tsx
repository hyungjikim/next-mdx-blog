import Link from "next/link";
import UtterancesComments from "../_shared/components/UtterancesComments";
import { Home } from "lucide-react";
import { getPost } from "../_shared/utils/getPost";
import { getSlug } from "../_shared/utils/getSlug";
import { SITE_URL } from "../_shared/constants/site";

export async function generateMetadata({}) {
  const slug = await getSlug();
  if (!slug) {
    return {
      title: "🙀 Hyungji Blog",
      description: "Happily Dev After",
    };
  }

  const post = await getPost(slug);
  if (!post) {
    return {
      title: "🙀 Hyungji Blog",
      description: "Happily Dev After",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.alternates.canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/post/${slug}`,
      siteName: "Hyungji Blog",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

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
