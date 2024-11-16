import React from "react";
import Container from "@/components/ui/Container/Container";
import img1 from "../../../../public/assets/about/about-1.jpg";
import img2 from "../../../../public/assets/about/about-2.jpg";
import img3 from "../../../../public/assets/about/about-3.jpg";

import Image from "next/image";
import Mission from "./_components/Mission";
import Banner from "@/components/shared/Banner/Banner";

const page = () => {
  const sections = [
    {
      image: img1,
      content:
        "NS International is a Leading multinational apparel buying house, sourcing company, Manufacturer and committed exporter of Woven, denim, Knit, sweater etc. The company was incorporated in 2010 by The collaboration of two partners. We are committed to produce the best quality garments for all of our internationally reputed brands /importers and departmental chain stores from the US, RU and the EU markets. Since our establishment 13 years ago, we have developed long term trade relationships with most of our international customers & earned their trust in their respective markets. We are involved in manufacturing and sourcing of all kind of RMG items, namely Men’s, Ladies, boys, girls, kids, Unisex items such as Pants, shirts, dress, sweaters, Socks, pullover, cardigans, jumper, vests, t-shirt, polo shirt, hoodie, sweat-shirt, jogging suits, etc.",
    },
    {
      image: img2,
      content:
        "NS International is a Leading multinational apparel buying house, sourcing company, Manufacturer and committed exporter of Woven, denim, Knit, sweater etc. The company was incorporated in 2010 by The collaboration of two partners. We are committed to produce the best quality garments for all of our internationally reputed brands /importers and departmental chain stores from the US, RU and the EU markets. Since our establishment 13 years ago, we have developed long term trade relationships with most of our international customers & earned their trust in their respective markets. We are involved in manufacturing and sourcing of all kind of RMG items, namely Men’s, Ladies, boys, girls, kids, Unisex items such as Pants, shirts, dress, sweaters, Socks, pullover, cardigans, jumper, vests, t-shirt, polo shirt, hoodie, sweat-shirt, jogging suits, etc.",
    },
    {
      image: img3,
      content:
        "NS International is a Leading multinational apparel buying house, sourcing company, Manufacturer and committed exporter of Woven, denim, Knit, sweater etc. The company was incorporated in 2010 by The collaboration of two partners. We are committed to produce the best quality garments for all of our internationally reputed brands /importers and departmental chain stores from the US, RU and the EU markets. Since our establishment 13 years ago, we have developed long term trade relationships with most of our international customers & earned their trust in their respective markets. We are involved in manufacturing and sourcing of all kind of RMG items, namely Men’s, Ladies, boys, girls, kids, Unisex items such as Pants, shirts, dress, sweaters, Socks, pullover, cardigans, jumper, vests, t-shirt, polo shirt, hoodie, sweat-shirt, jogging suits, etc.",
    },
  ];

  return (
    <>
      <Banner title="About Us" />
      <Container className="my-20">
        <div className="space-y-3 mb-10">
          <p className="text-2xl font-bold text-center text-blue-700">
            WHO WE ARE
          </p>
          <h1 className="text-5xl font-bold text-center">
            The Leading Apparel Manufacturer And Exporter
          </h1>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100"
          >
            {index % 2 === 0 ? (
              <>
                <Image
                  src={section.image}
                  alt="Image"
                  className="w-full border"
                />
                <p className="text-justify px-10">{section.content}</p>
              </>
            ) : (
              <>
                <p className="text-justify px-10">{section.content}</p>
                <Image
                  src={section.image}
                  alt="Image"
                  className="w-full border"
                />
              </>
            )}
          </div>
        ))}

        <Mission />
      </Container>
    </>
  );
};

export default page;
