import React from "react";
import Container from "@/components/ui/Container/Container";
import img1 from "../../../../../public/assets/about/about-1.jpg";
import img2 from "../../../../../public/assets/about/about-2.jpg";
import img3 from "../../../../../public/assets/about/about-3.jpg";
import Image from "next/image";

const page = () => {
  return (
    <Container className="my-20">
      <div className="space-y-3 mb-10">
        <p className="text-2xl font-bold text-center text-blue-700">
          WHO WE ARE
        </p>
        <h1 className="text-5xl font-bold text-center">
          The Leading Apparel Manufacturer And Exporter
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100">
        <Image src={img1} alt="Image" className="w-full border" />
        <p className="text-justify px-10">
          Warptex Bangladesh Limited is a Leading multinational apparel buying
          house, sourcing company, Manufacturer and committed exporter of Woven,
          denim, Knit, sweater etc. The company was incorporated in 2010 by The
          collaboration of two partners. We are committed to produce the best
          quality garments for all of our internationally reputed brands
          /importers and departmental chain stores from the US, RU and the EU
          markets. Since our establishment 13 years ago, we have developed long
          term trade relationships with most of our international customers &
          earned their trust in their respective markets. We are involved in
          manufacturing and sourcing of all kind of RMG items, namely Men’s,
          Ladies, boys, girls, kids, Unisex items such as Pants, shirts, dress,
          sweaters, Socks, pullover, cardigans, jumper, vests, t-shirt, polo
          shirt, hoodie, sweat-shirt, jogging suits, etc.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100">
        <p className="text-justify px-10">
          Warptex Bangladesh Limited is a Leading multinational apparel buying
          house, sourcing company, Manufacturer and committed exporter of Woven,
          denim, Knit, sweater etc. The company was incorporated in 2010 by The
          collaboration of two partners. We are committed to produce the best
          quality garments for all of our internationally reputed brands
          /importers and departmental chain stores from the US, RU and the EU
          markets. Since our establishment 13 years ago, we have developed long
          term trade relationships with most of our international customers &
          earned their trust in their respective markets. We are involved in
          manufacturing and sourcing of all kind of RMG items, namely Men’s,
          Ladies, boys, girls, kids, Unisex items such as Pants, shirts, dress,
          sweaters, Socks, pullover, cardigans, jumper, vests, t-shirt, polo
          shirt, hoodie, sweat-shirt, jogging suits, etc.
        </p>
        <Image src={img2} alt="Image" className="w-full border" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100">
        <Image src={img3} alt="Image" className="w-full border" />
        <p className="text-justify px-10">
          Warptex Bangladesh Limited is a Leading multinational apparel buying
          house, sourcing company, Manufacturer and committed exporter of Woven,
          denim, Knit, sweater etc. The company was incorporated in 2010 by The
          collaboration of two partners. We are committed to produce the best
          quality garments for all of our internationally reputed brands
          /importers and departmental chain stores from the US, RU and the EU
          markets. Since our establishment 13 years ago, we have developed long
          term trade relationships with most of our international customers &
          earned their trust in their respective markets. We are involved in
          manufacturing and sourcing of all kind of RMG items, namely Men’s,
          Ladies, boys, girls, kids, Unisex items such as Pants, shirts, dress,
          sweaters, Socks, pullover, cardigans, jumper, vests, t-shirt, polo
          shirt, hoodie, sweat-shirt, jogging suits, etc.
        </p>
      </div>
    </Container>
  );
};

export default page;
