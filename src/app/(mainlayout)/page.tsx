"use client";
import { useState, useEffect } from "react";
import About from "@/components/ui/HomePage/About/About";
import DevelopmentSlider from "@/components/ui/HomePage/DevelopmentSlider/DevelopmentSlider";
import Slider from "@/components/shared/Slider/Slider";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div>
        {isClient && (
          <div>
            <Slider/>
            <About />
            <DevelopmentSlider />
          </div>
        )}
      </div>
    </>
  );
}
