import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const blogsData = [
  {
    id: "1",
    title: "Overcoming Disguised Enemies",
    excerpt: "An enemy is a person who feels hatred for...",
    content: `## Overcoming Disguised Enemies

An **enemy** is a person who feels hatred for, fosters harmful designs against, or engages in antagonistic activities against another. Disguised enemies pretend to be friendly but work against you in secret.

### Identifying Disguised Enemies

- **False Friends**: People who only stay around for benefits.
- **Betrayers**: Those who break trust at the right opportunity.
- **Jealous Individuals**: People who resent your progress.

### How to Overcome

1. **Pray for Discernment** - Ask for wisdom to see through deception.
2. **Stay Vigilant** - Be cautious with sensitive information.
3. **Maintain Your Integrity** - Do not repay evil with evil.
4. **Trust in God's Protection** - Let God handle your battles.

> _'No weapon formed against you shall prosper...'_ - Isaiah 54:17`,
    date: "Aug 11, 2021",
    image: "/images/blog1.jpg",
  }
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogsData[0] | null>(null);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pastor's Blog</h1>

      {selectedBlog ? (
        <div>
          <button
            onClick={() => setSelectedBlog(null)}
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back to Blogs
          </button>

          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-6">{selectedBlog.title}</h1>
          <p className="text-gray-500 text-sm">{selectedBlog.date}</p>

          {/* ✅ Markdown Content Renders Correctly */}
          <div className="mt-4 text-lg text-gray-700 leading-relaxed">
            <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg shadow hover:shadow-lg transition flex cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="w-1/2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-1/2 p-4">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h2 className="text-xl font-bold text-purple-700 hover:underline">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{blog.excerpt}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
