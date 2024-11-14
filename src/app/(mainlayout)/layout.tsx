import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      
      {children}
      <Footer />
    </>
  );
};

export default layout;
