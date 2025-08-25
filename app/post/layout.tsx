import UtterancesComments from "../_shared/components/UtterancesComments";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <UtterancesComments key="post-comments" repo="hyungjikim/next-mdx-blog" />
    </>
  );
}
