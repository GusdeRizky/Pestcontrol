import ForthSection from "@/components/Home/ForthSection";
import HeroSection from "@/components/Home/HeroSection";
import SecondSection from "@/components/Home/SecondSection";
import ThirdSection from "@/components/Home/ThirdSection";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        {/*bagian 1*/}
        <HeroSection />

        {/*bagian 2*/}
        <SecondSection />

        {/*bagian 3*/}
        <ThirdSection />

        {/*bagian 4*/}
        <ForthSection />
      </div>
    </>
  );
};

export default Home;
