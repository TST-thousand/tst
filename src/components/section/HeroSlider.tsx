"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/src/data/heroSlides";

const AUTOPLAY_MS = 4000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    startAutoplay();
  };

  const slide = heroSlides[activeIndex];

  return (
    <section className="hero-slider" id="hero-slider">
      <div className="container">
        <div
          key={slide.id}
          className="hero-slider__frame row align-items-center"
        >
          <div className="col-lg-6">
            <div className="hero-slider__content">
              <Link href="/" className="hero-slider__mark" aria-label="TST">
                <Image
                  src="/assets/images/logo/logo2.png"
                  alt="TST"
                  width={56}
                  height={56}
                />
              </Link>

              <h2 className="hero-slider__title">{slide.title}</h2>
              <p className="hero-slider__subtitle">{slide.subtitle}</p>

              <div className="hero-slider__stats">
                {slide.stats.map((stat) => (
                  <div className="hero-slider__stat" key={stat.label}>
                    <span className="hero-slider__stat-value">
                      {stat.value}
                    </span>
                    <span className="hero-slider__stat-label">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="hero-slider__dots">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`hero-slider__dot${
                      index === activeIndex ? " is-active" : ""
                    }`}
                    aria-label={`${item.title} слайд руу очих`}
                    aria-current={index === activeIndex}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-slider__media">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                className="hero-slider__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
