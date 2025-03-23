import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function YouAndYourThought() {
  return (
      <>
            <Header />
            
    <section className="max-w-4xl mt-12 mx-auto py-12 px-6">
      {/* Rectangular Image at the Top */}
      <div className="w-full flex justify-center mb-8">
        <Image
          src="/img/your-thoughts.jpg" // Replace with the actual image path
          alt="You and Your Thought"
          width={800} // Wider for a rectangular shape
          height={450} // Adjusted height for a balanced aspect ratio
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
        YOU AND YOUR THOUGHT
      </h1>

      <p className="text-lg font-semibold text-center mb-6">
        The kind of life you live is traceable to the kind of thought you have.
      </p>

      <p className="text-lg font-bold text-center text-red-600">
        IT IS WHAT YOU THINK THAT YOU WILL ATTRACT.
      </p>

      {/* Bible Reference */}
      <h2 className="text-2xl font-bold mt-6 mb-4">Proverbs 4:23 (KJV)</h2>
      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
        "Keep your heart with all diligence, for out of it are the issues of life."
      </blockquote>

      <p className="text-lg text-gray-700 mb-6">
        Many people are defeated in life because of the kind of thoughts they allow—thoughts of fear, inadequacy, anxiety, guilt, inferiority, and unworthiness.
      </p>

      <p className="text-lg font-semibold text-center text-blue-600 mb-6">
        REMEMBER: YOU BECOME WHAT YOU THINK.
      </p>

      {/* Thought Power */}
      <h2 className="text-2xl font-bold mb-4">The Power of Your Thoughts</h2>
      <p className="text-lg text-gray-700 mb-6">
        Your thoughts control your words, actions, emotions, peace, and happiness. Proverbs 4:23 (NCV) says, 
        <strong> "Be careful what you think, because your thoughts run your life."</strong> 
        If you change your thoughts, you change your life.
      </p>

      {/* Overcoming Negative Thoughts */}
      <h2 className="text-2xl font-bold mb-4">How to Overcome Negative Thoughts</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>Feed your mind with God's Word.</li>
        <li>Reject and replace negative thoughts immediately.</li>
        <li>Surround yourself with faith-filled people.</li>
      </ul>

      {/* Biblical Example */}
      <h2 className="text-2xl font-bold mb-4">A Biblical Example</h2>
      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
        Matthew 9:20-22 (NLT): The woman with the issue of blood thought, "If I can just touch his robe, I will be healed." Her faith-filled thought brought her healing.
      </blockquote>

      {/* Guarding Your Mind */}
      <h2 className="text-2xl font-bold mb-4">Guarding Your Mind</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li>
          <strong>Be mindful of what you see:</strong> David saw Bathsheba, and his thoughts led to sin (2 Samuel 11:2-4).
        </li>
        <li>
          <strong>Be mindful of what you hear:</strong> Listening to negativity affects your thinking (Numbers 14:1-4).
        </li>
      </ul>

      {/* What to Think About */}
      <h2 className="text-2xl font-bold mb-4">What to Think About</h2>
      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
        Philippians 4:8 (NLT): "Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable. Think about things that are excellent and worthy of praise."
      </blockquote>

      <p className="text-lg font-semibold text-center text-blue-600">
        🕊 Shalom!! <br />
        <span className="italic">✍️ Pastor Dara Shofoluwe</span>
      </p>
    </section><Footer/>
          </>
  );
}
