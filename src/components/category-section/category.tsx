"use client";

import { useEffect, useState } from "react";

export default function CategorySection() {
  const [iconImages, setIconImages] = useState([]);

  useEffect(() => {
    const fetchIconImages = async () => {
      try {
        const response = await fetch(
          "https://api.testvalley.kr/main-shortcut/all"
        );
        const data = await response.json();
        setIconImages(data);
      } catch (error) {
        console.error("Error fetching hero images:", error);
      }
    };

    fetchIconImages();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="w-full flex justify-center lg:w-1/2">
          {iconImages.map((data: any, index) =>
            index < 5 ? (
              <div className="w-16 m-4">
                <img
                  src={data.imageUrl}
                  alt="testvalley"
                  width={70}
                  height={70}
                />
                <p className="text-xs text-center text-ellipsis overflow-hidden">
                  {data.title}
                </p>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          {iconImages.map((data: any, index) =>
            index >= 5 ? (
              <div className="w-16 m-4">
                <img
                  src={data.imageUrl}
                  alt="testvalley"
                  width={70}
                  height={70}
                />
                <p className="text-xs text-center text-ellipsis overflow-hidden">
                  {data.title}
                </p>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
}
