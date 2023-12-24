"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElement = sectionRef.current;

      if (parallaxElement) {
        parallaxElement.style.backgroundPositionY = `${scrollPosition * 0.7}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative h-[500px] bg-[url('https://images.unsplash.com/photo-1703244355676-95561db44fb1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex justify-center items-center"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="text-white text-center">
        <h1 className="text-[55px] leading-10">Ideas</h1>
        <p className="text-lg">Where all our great things begin</p>
      </div>
      <div className="absolute w-full h-28 bottom-0 right-0">
        <Image src="/poligon.png" alt="Triangle" fill sizes="100vh" priority />
      </div>
    </section>
  );
}

export default ParallaxSection;
