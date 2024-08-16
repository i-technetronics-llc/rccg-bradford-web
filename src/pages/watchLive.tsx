import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WatchLive() {

return (
    <div className="">
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Watch Video</h1>
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://youtube.com/embed/s79vCWXYI4Y?si=DjfHcG14MGzpeE-2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
      <Footer />
    </div>
);
}
