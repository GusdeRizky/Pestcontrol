import React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import Fadeup from "../animation/Fadeup";

const HeroSection = () => {
  return (
    <section className="bg-linear-to-br from-green-800 to-emerald-700 min-h-[90vh] flex flex-col items-center justify-center px-4 text-white">
      <Fadeup>
        <div className="flex items-center bg-white/25 rounded-full px-5 py-1 mb-6 backdrop-blur-sm gap-2 mt-4">
          <Leaf className="w-4 h-4" />
          <h1 className="text-xs sm:text-sm md:text-base">
            Eco-Friendly Pest Control
          </h1>
        </div>
      </Fadeup>
      <Fadeup delay={0.1}>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-center max-w-xs sm:max-w-xl md:max-w-3xl">
          Professional Pest Control Services You Can Trust
        </h2>
      </Fadeup>
      <Fadeup delay={0.1}>
        <p className="text-sm sm:text-base md:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl mb-5 mt-3">
          Safe, effective, and eco-friendly pest control for homes and
          buildings. Protect your space with our certified experts.
        </p>
      </Fadeup>
      <Fadeup delay={0.2}>
        <div className="flex flex-col sm:flex-row mb-10 gap-4 mt-3">
          <Link
            href="/pricing"
            className="bg-white px-7 py-2 font-medium text-sm sm:text-md rounded-xl text-green-800 transition transform hover:scale-105 text-center"
          >
            View Pricing
          </Link>
          <Link
            href="/"
            className="border-2 border-white px-7 py-2 font-medium text-sm sm:text-md rounded-xl text-white transition transform hover:scale-105 text-center"
          >
            Message Us
          </Link>
        </div>
      </Fadeup>
      <Fadeup delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-2 mb-3">
          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl">500+</div>
            <div className="font-light text-xs sm:text-sm">Happy Clients</div>
          </div>

          <div className="hidden sm:block h-10 w-0.5 bg-white/50"></div>

          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl">100%</div>
            <div className="font-light text-xs sm:text-sm">Eco-Friendly</div>
          </div>

          <div className="hidden sm:block h-10 w-0.5 bg-white/50"></div>

          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl">24/7</div>
            <div className="font-light text-xs sm:text-sm mb-5 sm:mb-0">
              Support
            </div>
          </div>
        </div>
      </Fadeup>
    </section>
  );
};

export default HeroSection;
