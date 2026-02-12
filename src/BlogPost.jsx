import { useParams, Link } from "react-router-dom";
import { useBlog } from "./UserContext/BlogContext";
import { IoMdArrowRoundBack } from "react-icons/io";
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
        content += `\n${'='.repeat(50)}\n`;
        content += `${section.heading}\n`;
        content += `${'='.repeat(50)}\n\n`;
        content += `${section.description}\n\n`;
        
        if (section.points && section.points.length > 0) {
          content += `Key Points:\n`;
          section.points.forEach((point) => {
            content += `• ${point}\n`;
          });
        }
        content += `\n`;
      });
    } else if (post.content) {
      content += post.content;
    }

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${post.title.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!post) return (
    <div className="p-5 max-w-2xl mx-auto">
      <p className="text-gray-600">Post not found.</p>
      <Link to="/blog" className="text-blue-500 hover:text-blue-700">Back to Blog</Link>
    </div>
  );

  return (
    <div className="p-3 max-w-3xl mt-3 mx-auto bg-gray-50 rounded-lg shadow text-black">
      <Link to="/blog" className="inline-block mb-5 px-4 py-2 bg-red-500 text-white  no-underline rounded font-extrabold hover:bg-red-600 text-2xl  transition"><IoMdArrowRoundBack /></Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.img && (
        <img 
          src={post.img} 
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg my-5 cursor-pointer hover:opacity-80 transition"
          onClick={() => setFullImageSrc(post.img)}
        />
      )}

      {/* Display sections if available */}
      {post.sections && post.sections.length > 0 ? (
        <div className="space-y-8">
          {post.sections.map((sec, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 py-4 bg-white rounded-r-lg p-4">
              <h2 className="text-2xl font-bold mb-3 text-blue-600">{sec.heading}</h2>
              
              {sec.image && (
                <img 
                  src={sec.image} 
                  alt={sec.heading}
                  className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-80 transition"
                  onClick={() => setFullImageSrc(sec.image)}
                />
              )}
              
              <p className="text-gray-700 mb-4 leading-relaxed">{sec.description}</p>
              
              {sec.points && sec.points.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {sec.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start text-gray-700">
                      <span className="text-blue-500 font-bold mr-3">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{post.content}</p>
      )}

      {/* Download Report Button */}
      <div className="mt-8 flex justify-center">
        <button 
          onClick={downloadReport}
          className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition text-lg"
        >
          ⬇️ Download Report
        </button>
      </div>

      {/* Full Image Modal */}
      {fullImageSrc && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setFullImageSrc(null)}
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullImageSrc(null)}
              className="absolute top-1 right-1 bg-gray-100 text-black px-2 py-1 rounded-lg font-extrabold hover:bg-red-600 transition text-xl"
            >
              ✕
            </button>
            <img 
              src={fullImageSrc} 
              alt="Full view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
