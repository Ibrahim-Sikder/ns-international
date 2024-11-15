import Slider from "@/components/shared/Slider/Slider";
import WhoWeAre from "@/components/ui/HomePage/WhoWeAre/WhoWeAre";
import Decorate from "@/components/ui/HomePage/Decorate/Decorate";
import DevelopmentSlider from "@/components/ui/HomePage/DevelopmentSlider/DevelopmentSlider";

export default function Home() {
  
  return (
    <>
      <div>
        <Slider />
        <WhoWeAre />
        <DevelopmentSlider />
        <Decorate />
      </div>
    </>
  );
}
