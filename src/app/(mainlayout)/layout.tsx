import React, { ReactNode } from "react";
// import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Slider from "@/components/shared/Slider/Slider";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      <Slider/>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default layout;
