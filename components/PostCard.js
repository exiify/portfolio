export default function PostCard({ post }) {
  
  return (
    <div
      onClick={() => {
        window.location.href = `/post/${post.slug}`;
      }}
      className=" rounded hover:cursor-pointer hover:bg-gray-700 transition-all duration-300 pt-6 pb-12 bg-gray-800 px-8 flex flex-col"
    >
      <span className="text-xl font-bold">{post.title}</span>
      <span className="font-light pr-24">{post.excerpt}</span>
      <div className="flex self-end mt-4">
        <span className="">Kp Adeyinka</span>
      </div>
    </div>
  );
}
