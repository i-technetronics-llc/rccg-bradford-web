import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewSongBlog = () => {
  return (
    <>
    <Header />
   
    <div className="max-w-3xl mt-12 mx-auto px-4 py-10 text-gray-900">
      {/* Blog Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">A NEW SONG</h1>
        <p className="text-gray-600 mt-2">By Pastor Dara Shofoluwe</p>
      </header>

      {/* Bible Verse */}
      <blockquote className="bg-blue-100 border-l-4 border-blue-600 text-gray-800 p-4 italic mb-6">
        <p>
          “I waited patiently for the LORD; and he inclined unto me, and heard
          my cry. He brought me up also out of an horrible pit, out of the miry
          clay, and set my feet upon a rock, and established my goings. And he
          hath put a new song in my mouth, even praise unto our God: many shall
          see it, and fear, and shall trust in the LORD.” (Psalm 40:1-3)
        </p>
      </blockquote>

      {/* Table of Contents */}
      <section className="bg-gray-100 p-6 rounded-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><a href="#what-is-a-new-song" className="text-blue-600 hover:underline">What is a New Song?</a></li>
          <li><a href="#when-to-sing-a-new-song" className="text-blue-600 hover:underline">When to Sing a New Song?</a></li>
          <li><a href="#types-of-songs" className="text-blue-600 hover:underline">What Kind of Songs Are You Singing?</a></li>
          <li><a href="#biblical-examples" className="text-blue-600 hover:underline">Biblical Examples of New Songs</a></li>
          <li><a href="#how-to-sing-a-new-song" className="text-blue-600 hover:underline">How to Sing a New Song</a></li>
          <li><a href="#prayer-points" className="text-blue-600 hover:underline">Prayer Points</a></li>
        </ul>
      </section>

      {/* What is a New Song? */}
      <section id="what-is-a-new-song" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">What is a New Song?</h2>
        <p className="mt-4">
          A new song signifies a supernatural turnaround where God changes
          someone’s situation for the better. It is a song of victory that
          testifies of God’s greatness.
        </p>
      </section>

      {/* When to Sing a New Song */}
      <section id="when-to-sing-a-new-song" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">When Do You Sing a New Song?</h2>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>When God gives you victory over trials and challenges.</li>
          <li>When He silences your mockers.</li>
          <li>When God turns your sorrow into joy.</li>
          <li>When He lifts you from nothing to greatness.</li>
        </ul>
      </section>

      {/* What Kind of Songs Are You Singing? */}
      <section id="types-of-songs" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">What Kind of Songs Are You Singing?</h2>
        <p className="mt-4">
          Songs reflect our heart and circumstances. Some sing songs of
          lamentation, but God desires us to sing songs of praise and
          thanksgiving.
        </p>
      </section>

      {/* Biblical Examples of New Songs */}
      <section id="biblical-examples" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Biblical Examples of Old and New Songs</h2>
        <p className="mt-4">
          Throughout the Bible, people sang new songs after experiencing God’s
          intervention:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>David in <strong>Psalm 126</strong> sang after God restored Zion.</li>
          <li>Miriam in <strong>Exodus 15:20-21</strong> sang after the Red Sea miracle.</li>
          <li>Hannah in <strong>1 Samuel 2:2</strong> after God gave her a child.</li>
          <li>Naomi in <strong>Ruth 4:15-17</strong> after God restored her joy.</li>
        </ul>
      </section>

      {/* How to Sing a New Song */}
      <section id="how-to-sing-a-new-song" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">What Must We Do to Sing a New Song?</h2>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Obey God’s instructions (<strong>Exodus 15:26</strong>).</li>
          <li>Trust in Him completely (<strong>Matthew 11:28–30</strong>).</li>
          <li>Have faith in His promises (<strong>Numbers 23:19</strong>).</li>
          <li>Give thanks always (<strong>1 Thessalonians 5:18</strong>).</li>
        </ul>
      </section>

      {/* Prayer Points */}
      <section id="prayer-points" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Prayer Points</h2>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Father, let my testimony bring forth a new song in Jesus’ name.</li>
          <li>Lord, let every sorrow in my life turn into joy.</li>
          <li>God, silence my mockers and give me a reason to sing.</li>
          <li>Father, let my breakthrough be evident for all to see.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <footer className="text-center mt-10">
        <p className="text-lg font-semibold">Shalom! 🙏</p>
        <p className="text-gray-600 mt-2">- Pastor Dara Shofoluwe</p>
      </footer>
    </div>
  <Footer/>
  </> );
};

export default NewSongBlog;
