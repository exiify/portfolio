import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
export default function Post({ post }) {
  const contentHtml = { __html: post.content };
  return (
    <div className="flex flex-col px-12 lg:px-64 py-12 ">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={contentHtml}></div>

      <div className="self-end mt-12">
        <a
          href="/posts"
          className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
        >
          See More Posts
        </a>
      </div>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.post, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          post: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
