import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WhatIsYourTemperature() {
  return (
      <>
            <Header />
          
    <section className="max-w-4xl mt-12 mx-auto py-12 px-6">
      {/* Rectangular Image at the Top */}
      <div className="w-full flex justify-center mb-8">
        <Image
          src="/img/temp.jpg" // Replace with the actual image path
          alt="What is Your Temperature?"
          width={800} // Wider for a rectangular shape
          height={450} // Adjusted height for a balanced aspect ratio
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
        WHAT IS YOUR TEMPERATURE?
      </h1>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
        "I know your works; you are neither cold nor hot. I wish that you were either cold or hot. 
        So, because you are lukewarm, and neither cold nor hot, I am about to spit you out of my mouth."
        <br />
        <span className="font-semibold">(Revelation 3:15-16)</span>
      </blockquote>

      <p className="text-lg text-gray-700 mb-6">
        This is one of Jesus’ seven letters to the seven Asian churches, specifically to the church in Laodicea. 
        Jesus speaks about three spiritual temperatures: hot, cold, and lukewarm. Two are right, and one is wrong. 
        The lukewarm Christian is at risk of being spewed out of His presence.
      </p>

      {/* Biblical Reference */}
      <h2 className="text-2xl font-bold mb-4">Revelation 3:14-22 (NKJV)</h2>
      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
        [Full Bible passage content here for reference...]
      </blockquote>

      {/* Who is a Lukewarm Christian? */}
      <h2 className="text-2xl font-bold mb-4">Who is a Lukewarm Christian?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>Christianity without conviction.</li>
        <li>Christianity without passion or zeal for God.</li>
        <li>Indifference and half-heartedness in faith.</li>
      </ul>

      {/* Stages of Lukewarmness */}
      <h2 className="text-2xl font-bold mb-4">Stages of Lukewarmness</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>Incomplete conversion experience—no real transformation.</li>
        <li>Sudden drop or loss of spiritual fire—living in past glory.</li>
      </ul>

      {/* Characteristics of a Lukewarm Person */}
      <h2 className="text-2xl font-bold mb-4">Characteristics of a Lukewarm Person</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>Desires both Jesus and the world but often chooses the world (Mt. 16:26).</li>
        <li>Inconsistent Bible study, fasting, and prayer life (Jn. 5:39; Jas 5:16b).</li>
        <li>Avoids spiritual fellowship (Heb. 10:25).</li>
        <li>Conforms to worldly standards (1Jn. 2:15-16; Rom. 12:2).</li>
        <li>More focused on celebrities than Jesus (Heb. 12:2).</li>
        <li>Listens to corrupt music instead of godly worship (Eph. 5:19).</li>
        <li>Feels ashamed to share the Gospel (Rom. 1:16; Matt. 10:33).</li>
      </ul>

      {/* How to Overcome Lukewarmness */}
      <h2 className="text-2xl font-bold mb-4">How Do I Get Out of Lukewarmness?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>Be zealous—take your faith seriously (Rev. 3:19).</li>
        <li>Repent and own up to your lukewarmness.</li>
        <li>Invite Jesus to take full control of your life (Rev. 3:20).</li>
        <li>Commit to a life of obedience and holiness.</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-6">
        Lukewarmness is the wrong temperature for a Christian. Be passionately hot or refreshingly cold. 
        But don’t be lukewarm—it makes Jesus sick.
      </p>

      <p className="text-lg font-semibold text-center text-blue-600">
        🔥 What’s your temperature today? 🔥
      </p>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Are you hot—stirring others in faith? Are you cold—refreshing and uplifting others?
      </p>

      <p className="text-lg font-semibold text-center text-blue-600">🕊 Shalom!!</p>
      <p className="text-center text-gray-700 mt-4 font-semibold">✍️ Pastor Dara Shofoluwe</p>
    </section>  <Footer/>
          </>
  );
}
