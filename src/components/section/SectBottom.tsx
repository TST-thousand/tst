"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/assets/images/blog/poster.png",
  "/assets/images/blog/recent-2.jpg",
  "/assets/images/blog/recent-3.jpg",
  "/assets/images/blog/recent-4.jpg",
];

export const SectBottom = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sect-bottom rotating-gallery">
      <div className="box-hacker has-overlay_linear">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`blog-${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`hacker-image ${
              index === activeIndex ? "is-active" : ""
            }`}
            style={{
              objectFit: "cover",
              opacity: index === activeIndex ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
};
