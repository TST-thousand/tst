"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONTACT_PHONE = "+97699662482";

export default function ContactFloat() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const icon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.2 2.8 4.7 4.1c-1 .5-1.5 1.7-1.2 2.8C5.3 13.6 10.4 18.7 17.1 20.5c1.1.3 2.3-.2 2.8-1.2l1.3-2.5c.4-.9.1-1.9-.7-2.4l-3-1.8a1.9 1.9 0 0 0-2.3.2l-1.2 1.1a13.2 13.2 0 0 1-3.9-3.9l1.1-1.2c.6-.6.7-1.6.2-2.3l-1.8-3a1.9 1.9 0 0 0-2.4-.7Z" />
    </svg>
  );

  if (isMobile) {
    return (
      <a
        href={`tel:${CONTACT_PHONE}`}
        className="contact-float"
        aria-label="Бидэнтэй холбогдох"
      >
        {icon}
      </a>
    );
  }

  return (
    <Link href="/contact-us" className="contact-float" aria-label="Бидэнтэй холбогдох">
      {icon}
    </Link>
  );
}
