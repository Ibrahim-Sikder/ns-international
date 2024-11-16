import Image from "next/image";
import img from "../../../../../public/assets/ethics/no-child-labor.jpg";
import Container from "@/components/ui/Container/Container";

const CSR = () => {
  return (
    <>
      <Container className="my-20">
        <h2 className="bg-blue-800 py-4 text-center text-white text-2xl font-semibold">
          CSR
        </h2>
        <div className="bg-gray-100 lg:p-10 p-5">
          <div>
            <h3>CSR (Corporate Social Responsibility)</h3>
            <p className="text-justify mt-5">
              Warptex prefers and works only with factories who take their
              social responsibility seriously and puts in effective measures to
              ensure the betterment of the community and environment around
              them. This not only boosts our morality but also gives our clients
              the opportunity to feel that something of greater good comes out
              of their business with us above the monetary transactions.
            </p>
            <p className="text-justify mt-5">
              It is in our code to make sure our business partners are all worry
              of the wellbeing of their workers and the environment. Our
              compliance factories have in-house daycare centers, emergency
              first aid professionals and many other social windows to ensure
              the workers peace of mind. They are also well equipped with waste
              disposal equipment and methods to ensure minimal adverse effects
              to the environment.
            </p>
            <p className="text-justify mt-5">
              WBesides, we are proud to have developed and supported exceptional
              charitable initiatives across Bangladesh. And Warptex Bangladesh
              limited participating in all, from the beginning. Ensuring proper
              Education for underprivileged and orphaned children, Funds for
              rural area clinics etc.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
            <div className="bg-white">
              <p className="p-5 border-b text-justify">
                <span className="font-semibold">
                  Ensuring Education for Kids :
                </span>{" "}
                Warptex feels that since we are at one with the world it is our
                responsibility to improve the world. The mission is to provide
                underprivileged and orphaned children a quality education which
                will give them the skills they need to provide for themselves
                and their families in the future – thereby breaking the vicious
                cycle of poverty.
              </p>
              <p className="p-5 border-b text-justify">
                <span className="font-semibold">Funds for Clinic :</span> We are
                allocating some portion of our funds in clinics which are
                located in Rural area. We donate to these clinics to provide
                free medical care to impoverished people. These health clinics
                provide free consultancy, treatment and homeopathic medicines to
                the poorest people in these rural areas.
              </p>
            </div>
            <Image
              src={img}
              alt="Compliance Workforce"
              className="w-full h-full"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CSR;
