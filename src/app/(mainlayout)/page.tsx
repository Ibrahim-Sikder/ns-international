import Slider from "@/components/shared/Slider/Slider";
import About from "@/components/ui/HomePage/About/About";
import Decorate from "@/components/ui/HomePage/Decorate/Decorate";
import DevelopmentSlider from "@/components/ui/HomePage/DevelopmentSlider/DevelopmentSlider";
// import { useEffect, useState } from "react";


export default function Home() {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <>
      <div>
        <Slider />
        <About />
        <DevelopmentSlider />

        <Decorate />
      </div>
    </>



  );
}
