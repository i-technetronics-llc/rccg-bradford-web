import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HouseFellowship() {
  const zoomLink = "https://us02web.zoom.us/j/84948658772pwd=c0xsaEFVQzJoSCtyQ09nSWhNSTN4Zz09";

  return (
    <>
      <Header />
      <main className="mt-[120px] mb-20">
        <div className="max-w-7xl mx-auto px-4"> {/* Increased max-width */}
          {/* Image Section */}
          <div className="relative w-full h-[800px] mx-auto mb-8"> {/* Increased height to 800px */}
            <Image
              src="/img/fellowship.jpg"
              alt="House Fellowship"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>

          {/* Zoom Details */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">Join Our House Fellowship</h2>
            <p className="text-xl font-semibold">TIME: 6-7PM</p>
            <a 
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Join Zoom Meeting
            </a>
            <p className="text-gray-600 mt-4">
              For direction, call <a href="tel:07488379477" className="text-primary hover:underline">07488379477</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}