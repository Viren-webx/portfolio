import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlog } from "./UserContext/BlogContext";
import { IoMdArrowRoundBack } from "react-icons/io";

function BlogList() {
const ctx = useBlog();

if (!ctx) {
  return <div>Loading...</div>;
}

const { posts } = ctx;

const [activePost, setActivePost] = useState(null);

const groupedPosts = posts.reduce((acc, post) => {
  const section = post.section || "Other";

  if (!acc[section]) {
    acc[section] = [];
  }

  acc[section].push(post);

  return acc;
}, {});

  const scrollToPost = (id) => {
  const element = document.getElementById(`post-${id}`);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
 useEffect(() => {
  const handleScroll = () => {
    const cards = document.querySelectorAll("[data-post]");

    let current = null;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      // Card is near the top of the screen
      if (rect.top <= 180 && rect.bottom >= 180) {
        current = card.dataset.post;
      }
    });

    if (current) {
      setActivePost(current);
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // Run once on load

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
};

  return (
    <div className="min-h-screen bg-[#FFEED6] text-white">

      {/* Header */}

      <div className="border-b border-gray-800 backdrop-blur-md sticky top-0 z-50 bg-[#0B1120]/90">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold tracking-wide">
            My Portfolio
          </h1>

          <Link
            to="/"
            className="flex items-center gap-2  bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-semibold"
          >
            <IoMdArrowRoundBack />
            Back Home
          </Link>

        </div>

      </div>

      {/* Main */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-6 py-10">

        {/* Sidebar */}

        <aside className="lg:w-72">

          <div className="bg-white rounded-2xl border border-gray-700 p-6 sticky top-28 shadow-xl">

            <h2 className="text-2xl font-bold mb-6 text-black">
              Blog Categories
            </h2>

<div className="space-y-6">

  {Object.entries(groupedPosts).map(([section, sectionPosts]) => (

    <div key={section}>

      <h3 className="text-green-700 font-bold mb-3">
        {section}
      </h3>

<ul className="space-y-2">

  {sectionPosts.map((post) => (

<li
  key={post.id}
  onClick={() => scrollToPost(post.id)}
  className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 border-l-4 ${
    String(activePost) === String(post.id)
      ? "border-gray-800 bg-green-500/20 text-black"
      : "border-transparent text-gray-700 font-medium hover:text-black hover:bg-green-500/10"
  }`}
>
  {post.title}
</li>

  ))}

</ul>

    </div>

  ))}

</div>

          </div>

        </aside>

        {/* Blog Content */}

        <div className="flex-1">

          <h1 className="text-6xl text-black font-bold mb-3">
            My Blog
          </h1>

          <p className="text-gray-700 text-lg mb-12">
            Exploring Cybersecurity, Digital Forensics & Threat Intelligence
          </p>

          {Object.entries(groupedPosts).map(([section, sectionPosts]) => (

            <div key={section} className="mb-16">

              <h2 className="text-3xl font-bold  text-gray-800 mb-8 border-l-4 border-green-700 pl-4">
                {section}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                {sectionPosts.map((post) => (

<div
    id={`post-${post.id}`}
    data-post={post.id}
    key={post.id}
    className="bg-white text-black rounded-3xl overflow-hidden border border-gray-700 hover:border-gray-300 hover:-translate-y-2 transition duration-300 shadow-xl scroll-mt-28"
>

                    {post.img && (
                      <img
                        src={post.img}
                        alt={post.title}
                        className="h-56 w-full object-cover"
                      />
                    )}

                    <div className="p-6">

                      <h3 className="text-2xl font-bold mb-4">
                        {post.title}
                      </h3>

                      <p className="text-gray-800 leading-7 mb-6">

                        {post.sections &&
                        post.sections[0]?.description
                          ? post.sections[0].description.substring(0, 140) + "..."
                          : post.content?.substring(0, 140) + "..."}

                      </p>

                      <Link
                        to={`/blog/post/${post.id}`}
                        className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-xl transition"
                      >
                        Read Article →
                      </Link>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default BlogList;
