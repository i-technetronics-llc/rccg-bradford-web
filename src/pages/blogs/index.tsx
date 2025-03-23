import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogs = [
  {
    title: "Divine Preference: You Will Be Preferred",
    image: "/img/men.gif",
    excerpt: "Discover how divine preference can uplift and set you apart in all aspects of life.",
    url: "/blogs/divine-preference",
  },
  {
    title: "What is Your Temperature?",
    image: "/img/men.gif",
    excerpt: "This spewing out is not a message of hope. It is a message of judgment.",
    url: "/blogs/what-is-your-temperature",
  },
  {
    title: "YOU AND YOUR THOUGHT",
    image: "/img/men.gif",
    excerpt: "The kind of life you live is traceable to the kind of thought you have",
    url: "/blogs/you-and-your-thought",
  },
  
  {
    title: "THE POTENCY OF GODLY SACRIFICE",
    image: "/img/men.gif",
    excerpt: "Thou therefore endure hardness, as a good soldier of Jesus Christ.",
    url: "/blogs/the-potency-of-godly-sacrifice",
  },
  {
    title: "A NEW SONG",
    image: "/img/men.gif",
    excerpt: "Nine different times, “A new song” appears in Scripture. Six are in the Psalms, two in Revelations, and one in Isaiah. ",
    url: "/blogs/a-new-song",
  },

];

export default function BlogList() {
  return (
    <>
        <Header />
      
    <section className="max-w-4xl mt-12 mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Latest Blogs</h1>

      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <Link key={index} href={blog.url}>
            <div className="flex flex-col md:flex-row items-center  bg-white shadow-lg rounded-xl  mt-8 gap-8 overflow-hidden hover:shadow-xl transition cursor-pointer p-6 md:h-44">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-56 h-36 object-cover rounded-lg"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left flex-1">
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <p className="text-gray-600 mt-2 leading-relaxed">{blog.excerpt}</p>
                <p className="text-blue-600 text-lg mt-2 font-semibold">Read More →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>  <Footer />
    </>
  );
}
