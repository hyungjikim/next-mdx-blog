import { Posts } from "./_shared/components/Posts";
import { getPosts } from "./_shared/utils/getPosts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <hr className="my-4" />
      <Posts posts={posts} />
    </div>
  );
}
