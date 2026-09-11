"use client";

import { useEffect, useState } from "react";

interface SectionNavItem {
  id: string;
  label: string;
}

const SECTIONS: SectionNavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "hero-slider", label: "Slider" },
  { id: "features", label: "Features" },
  { id: "benefits", label: "Benefits" },
  { id: "howToUse", label: "How To Use" },
  { id: "partners", label: "Partners" },
];

export default function SectionNavIndicator() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0]?.id ?? "");

  useEffect(() => {
    const elements = SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target.id) {
          setActiveId(mostVisible.target.id);
        }
      },
      { threshold: 0.4 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="section-nav-indicator" aria-label="Section navigation">
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          type="button"
          className={`section-nav-indicator__pill ${
            activeId === section.id ? "is-active" : ""
          }`}
          onClick={() => handleClick(section.id)}
          aria-label={`Go to ${section.label}`}
          aria-current={activeId === section.id ? "true" : undefined}
        />
      ))}
    </nav>
  );
}
