"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right";

type RevealProps = {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function Reveal({
  children,
  type = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClass =
    type === "fade-up"
      ? "animate-reveal-fade-up"
      : type === "fade-in"
      ? "animate-reveal-fade-in"
      : type === "slide-left"
      ? "animate-reveal-slide-left"
      : "animate-reveal-slide-right";

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? animationClass : "opacity-0"}`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}