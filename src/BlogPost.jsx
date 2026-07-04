import { useParams, Link } from "react-router-dom";
import { useBlog } from "./UserContext/BlogContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";


export default function BlogPost() {
  const { id } = useParams();
  const { getPost } = useBlog();
  const post = getPost(id);

  const [fullImageSrc, setFullImageSrc] = useState(null);

  const downloadReport = () => {
    let content = `${post.title}\n\n`;

    if (post.sections && post.sections.length > 0) {
      post.sections.forEach((section) => {
        content += `\n${"=".repeat(60)}\n`;
        content += `${section.heading}\n`;
        content += `${"=".repeat(60)}\n\n`;

        content += `${section.description}\n\n`;

        if (section.points?.length) {
          content += "Key Points:\n";

          section.points.forEach((point) => {
            content += `• ${point}\n`;
          });
        }

        content += "\n";
      });
    } else {
      content += post.content;
    }

    const element = document.createElement("a");
    const file = new Blob([content], {
      type: "text/plain",
    });

    element.href = URL.createObjectURL(file);
    element.download = `${post.title.replace(/\s+/g, "_")}.txt`;

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFEED6] flex items-center justify-center text-black">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Post not found
          </h2>

          <Link
            to="/blog"
            className="text-red-400 hover:text-red-300"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFEED6] text-black">

      {/* Header */}

      <div className="sticky top-0 z-50 border-b border-gray-800 bg-[#0B1120]/90 backdrop-blur-lg">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

          <Link
            to="/blog"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600  font-semibold px-5 py-3 rounded-xl transition"
          >
            <IoMdArrowRoundBack />
            Back
          </Link>

          <span className="text-gray-400">
             Author: Virendra Rao
          </span>

        </div>

      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Hero */}
{/* Hero Card */}

<div className="bg-white border p-2 border-gray-700 rounded-3xl overflow-hidden shadow-2xl mb-10">

  {post.img && (
    <img
      src={post.img}
      alt={post.title}
      onClick={() => setFullImageSrc(post.img)}
      className="w-full h-[450px] object-cover cursor-pointer hover:scale-[1.02] transition duration-500"
    />
  )}

  <div className="p-10">

    <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-700 text-sm font-semibold mb-5">
      Cyber Security
    </span>

    <h1 className="text-5xl font-bold leading-tight mb-6">
      {post.title}
    </h1>

    <p className="text-gray-700 text-lg leading-8">
      {post.sections && post.sections.length > 0
        ? post.sections[0].description
        : post.content}
    </p>

  </div>

</div>

{/* Sections */}

{post.sections && post.sections.length > 0 ? (

  <div className="space-y-10">

    {post.sections.map((sec, idx) => (

      <div
        key={idx}
        className="bg-white border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:border-gray-300 transition duration-300"
      >

        {sec.image && (

          <img
            src={sec.image}
            alt={sec.heading}
            onClick={() => setFullImageSrc(sec.image)}
            className="w-full h-80 object-cover cursor-pointer hover:brightness-110 transition"
          />

        )}

        <div className="p-8">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            {sec.heading}
          </h2>

          <p className="text-gray-700 font-semibold text-lg leading-8 mb-8">
            {sec.description}
          </p>

          {sec.points && sec.points.length > 0 && (

            <div className="grid md:grid-cols-2 gap-4">

              {sec.points.map((point, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#FFEED6]/50  rounded-xl p-4 border border-gray-700"
                >

                  <div className="w-3 h-3 rounded-full bg-green-700 mt-2"></div>

                  <span className="text-gray-700 font-semibold ">
                    {point}
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    ))}

  </div>

) : (

  <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8">

    <p className="text-lg text-gray-300 whitespace-pre-wrap leading-8">
      {post.content}
    </p>

  </div>

)}
{/* Download Report */}

<div className="mt-12">

  <div className="bg-white border-2 border-gray-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

    <div>

      <h3 className="text-2xl font-bold mb-2">
        Download Investigation Report
      </h3>

      <p className="text-gray-700">
        Download this article as a text report for offline reading.
      </p>

    </div>

    <button
      onClick={downloadReport}
      className=" text-2xl text-black font-bold px-8 py-4 rounded-xl transition duration-300 hover:scale-105"
    >
   <FaDownload />
    </button>

  </div>

</div>

{/* Image Modal */}

{fullImageSrc && (

  <div
    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    onClick={() => setFullImageSrc(null)}
  >

    <div
      className="relative max-w-6xl w-full"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        onClick={() => setFullImageSrc(null)}
        className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white text-2xl font-bold shadow-lg"
      >
        ×
      </button>

      <img
        src={fullImageSrc}
        alt="Preview"
        className="w-full max-h-[90vh] object-contain rounded-2xl border border-white"
      />

    </div>

  </div>

)}

{/* Footer */}

<footer className="mt-16 border-t border-gray-800 py-8 text-center text-gray-500">

  © {new Date().getFullYear()} My Portfolio • Cyber Security Blog • Virendra Rao

</footer>

</div>

</div>

);
}
