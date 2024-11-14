import Slider from "@/components/shared/Slider/Slider";
import About from "@/components/ui/HomePage/About/About";
import Decorate from "@/components/ui/HomePage/Decorate/Decorate";
import DevelopmentSlider from "@/components/ui/HomePage/DevelopmentSlider/DevelopmentSlider";

export default function Home() {
  return (
    <main>
      <Slider/>
      <About/>
      <DevelopmentSlider/>     
      <Decorate/> 
    </main>
  );
}
