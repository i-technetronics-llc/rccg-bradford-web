import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image component for optimized images

export default function LatestSermons() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Open Heavens Daily Devotional</h2>
            <p className="text-lg mb-6">
              Discover the powerful message from our latest sermon. Watch now to be inspired and uplifted by the Word.
            </p>
            <Link href="https://rccgonline.org/" target="_blank">
              <button className="bg-primary rounded-full px-5 py-2 text-white font-semibold hover:bg-primary-dark transition">
                VIEW MORE
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/img/OpenHeaven.jpg" // Replace with your image path
              alt="Sermon Image"
              width={600} // Set the width of the image
              height={400} // Set the height of the image
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}