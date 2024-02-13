"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Hero: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.testvalley.kr/main-banner/all")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="hero relative">
      <div className="relative w-full overflow-hidden">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-600 bg-opacity-60 rounded-full p-2"
        >
          <ChevronLeftIcon className="h-6 w-6" color="white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-600 bg-opacity-60 rounded-full p-2"
        >
          <ChevronRightIcon className="h-6 w-6" color="white" />
        </button>
        <div
          className="flex transition-transform ease-in-out duration-500 transform"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((imageUrl: any, index) => (
            <img
              key={index}
              src={imageUrl.mobileImageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
