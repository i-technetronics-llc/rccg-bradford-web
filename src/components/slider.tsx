import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageBannerSlider() {
  const images = [
       "/img/RCCG-NOV.jpg",
    "/img/YearBanner.jpg",
    // "https://eu-west-2.graphassets.com/cm00utdux6vaz08mkdx210ojr/cm0pijnb31ytb07l9kyptgjcl",
    // "https://eu-west-2.graphassets.com/cm00utdux6vaz08mkdx210ojr/cm0pijn7c1za207mn2pyaizoz",
    // "https://eu-west-2.graphassets.com/cm00utdux6vaz08mkdx210ojr/cm0ajdwxs8fv507ldzuu04e9g",
  ]; // Replace with your actual image paths

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[850px] 2xl:h-[1000px] mb-10 xl:p-10 overflow-hidden">
      {/* Images */}
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-contain xl:object-contain xl: transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}