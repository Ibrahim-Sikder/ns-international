import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import OurPartner from "@/components/shared/OurPartner/OurPartner";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      
      {children}
      <OurPartner />
      <Footer />
    </>
  );
};

export default layout;
