"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"; // import icons needed

export default function HeroSection() {
  const [heroImages, setHeroImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const response = await fetch(
          "https://api.testvalley.kr/main-banner/all"
        );
        const data = await response.json();
        setHeroImages(data);
      } catch (error) {
        console.error("Error fetching hero images:", error);
      }
    };

    fetchHeroImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative w-full overflow-hidden h-1/3 max-h-1/3 lg:max-h-1/2">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          width: heroImages.length > 1 ? `${heroImages.length * 100}%` : "100%",
        }}
      >
        {heroImages.map((image: any, index) => (
          <div key={index} className="w-full lg:w-5/6 flex-shrink-0 h-full">
            <img
              key={index}
              src={image.mobileImageUrl}
              alt={image.title}
              // width={100}
              // height={100}
              className="w-full h-full object-cover object-center block"
              style={{
                maxHeight: "33vh",
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-10  bg-gray-600 bg-opacity-60 rounded-full p-2"
        onClick={() =>
          setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : heroImages.length - 1
          )
        }
      >
        <ChevronLeftIcon className="h-6 w-6" color="white" />
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-10 bg-gray-600 bg-opacity-60 rounded-full p-2"
        onClick={() =>
          setCurrentImageIndex((prevIndex) =>
            prevIndex < heroImages.length - 1 ? prevIndex + 1 : 0
          )
        }
      >
        <ChevronRightIcon className="h-6 w-6" color="white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 bg-white rounded-full mx-1 ${index === currentImageIndex ? "bg-blue-600" : "bg-white"}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
