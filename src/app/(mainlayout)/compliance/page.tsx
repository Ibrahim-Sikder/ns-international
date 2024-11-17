import React from "react";
import ComplianceSection from "./_components/Compliance";
import Vision from "./_components/Vision";
import Policy from "./_components/Policy";
import Conduct from "./_components/Conduct";
import CSR from "./_components/CSR";

const page = () => {
  return (
    <>
      <ComplianceSection />
      <Vision />
      <Policy />
      <Conduct />
      <CSR />
    </>
  );
};

export default page;
