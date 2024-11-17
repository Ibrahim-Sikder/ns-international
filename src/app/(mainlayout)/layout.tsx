import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import CompanyMarquee from "@/components/shared/OurPartner/OurPartner";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      
      {children}
      <CompanyMarquee />
      <Footer />
    </>
  );
};

export default layout;
