import React from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js optimized image component

export default function LatestSermons() {
  return (
    <section className="py-12 bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4">
              Open Heavens Daily Devotional
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6">
              Discover the powerful message from our latest sermon. Watch now to be inspired and uplifted by the Word.
            </p>

            <Link href="https://rccgonline.org/" target="_blank">
              <button
                className="bg-primary rounded-full px-6 py-3 text-white font-semibold hover:bg-primary-dark transition"
                aria-label="View Open Heavens Daily Devotional"
              >
                VIEW MORE
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <Image
              src="/img/OpenHeaven.jpg" // Replace with actual image path
              alt="Open Heavens Daily Devotional"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
