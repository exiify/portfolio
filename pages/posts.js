import PostCard from "../components/PostCard";

import { getAllPosts } from "../lib/api";

export default function Posts(props) {
  const posts = props.allPosts;
  return (
    <div className="h-full flex flex-col px-8 sm:px-24 lg:px-64 items-center gap-4 ">
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
