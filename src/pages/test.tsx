import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image src="/img/dara.jpg" alt="Software Engineer" width={700} height={250} className="w-full h-76 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
        <p className="text-gray-600 mt-2">Responsible for developing, testing, and maintaining software applications.</p>
        <Link href="/read-more" className="mt-4 inline-block text-blue-600 font-medium hover:underline">Read More →</Link>
      </div>
    </div>
  );
};

export default Card;
