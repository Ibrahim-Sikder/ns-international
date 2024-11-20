import Slider from "@/components/shared/Slider/Slider";
import WhoWeAre from "@/components/ui/HomePage/WhoWeAre/WhoWeAre";
import Decorate from "@/components/ui/HomePage/Decorate/Decorate";
import DevelopmentSlider from "@/components/ui/HomePage/DevelopmentSlider/DevelopmentSlider";
import Testimonials from "@/components/ui/HomePage/Testimonial/Testimonial";
import ParallaxSec from "@/components/ui/HomePage/ParallaxSec/ParallaxSec";
import Glance from "@/components/ui/HomePage/Glance/Glance";

export default function Home() {
  return (
    <>
      <div>
        <Slider />
        <WhoWeAre />
        <DevelopmentSlider />
        <ParallaxSec/>
        <Testimonials/>
        <Glance/>
        <Decorate />   
      </div>
    </>
  );
}
