import { Link } from "react-router-dom";
import { useBlog } from "./UserContext/BlogContext";
import { IoMdArrowRoundBack } from "react-icons/io";


function BlogList() {
  const ctx = useBlog();
  if (!ctx) return <div className="text-center py-8">Loading...</div>;
  const { posts } = ctx;

  // Group posts by section
  const groupedPosts = posts.reduce((acc, post) => {
    const section = post.section || "Other";
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(post);
    return acc;
  }, {});

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-5 px-4 py-2 bg-red-500 text-white  no-underline rounded font-extrabold hover:bg-red-600 text-2xl  transition">
        <IoMdArrowRoundBack />
      </Link>
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>

      {posts.length === 0 && <p className="text-gray-600">No blog posts yet.</p>}

      {Object.entries(groupedPosts).map(([section, sectionPosts]) => (
        <div key={section} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-3 border-b-4 border-blue-500 text-blue-600">
            {section}
          </h2>
          
          {sectionPosts.map((post) => (
            <div key={post.id} className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 overflow-hidden hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-black">{post.title}</h3>
              {post.img && (
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <p className="text-gray-600 mb-3">
                {post.sections && post.sections[0]?.description 
                  ? post.sections[0].description.substring(0, 150) + "..." 
                  : post.content?.substring(0, 150) + "..."}
              </p>
              <Link to={`/blog/post/${post.id}`} className="text-blue-500 no-underline font-bold hover:text-blue-700">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default BlogList;