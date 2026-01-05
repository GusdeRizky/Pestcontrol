import { Leaf, Users, PiggyBank, CircleGauge } from "lucide-react";
import React from "react";
import Fadeup from "../animation/Fadeup";

const SecondSection = () => {
  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col items-center justify-center px-4">
      <Fadeup>
        <p className="text-green-900 text-sm md:text-base lg:text-lg font-light mb-1 mt-5">
          WHY CHOOSE US
        </p>
      </Fadeup>
      <Fadeup delay={0.1}>
        <h1 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 mb-3 text-center">
          The DaniPest Difference
        </h1>
      </Fadeup>
      <Fadeup delay={0.1}>
        <h2 className="text-green-950 text-sm max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-center">
          We combine expertise with eco-conscious methods to deliver pest
          control that protects both your space and the environment.
        </h2>
      </Fadeup>
      <Fadeup delay={0.3}>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-8 mb-6 w-full">
          {/* CARD 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm text-center flex flex-col items-center px-4 py-6 transition transform hover:scale-105 w-full sm:w-70 md:w-75">
            <div className="bg-linear-to-br from-green-600 to-emerald-900 p-3 rounded-2xl mb-3 transition transform hover:scale-110">
              <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl text-black font-semibold mb-1">
              Safe & Eco-Friendly
            </h1>
            <p className="text-sm sm:text-base text-black max-w-xs">
              Our treatments are environmentally safe for your family, pets, and
              the planet.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm text-center flex flex-col items-center px-4 py-6 transition transform hover:scale-105 w-full sm:w-70 md:w-75">
            <div className="bg-linear-to-br from-green-600 to-emerald-900 p-3 rounded-2xl mb-3 transition transform hover:scale-110">
              <Users className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl text-black font-semibold mb-1">
              Professional Team
            </h1>
            <p className="text-sm sm:text-base text-black max-w-xs">
              Certified experts with years of experience in pest management.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm text-center flex flex-col items-center px-4 py-6 transition transform hover:scale-105 w-full sm:w-70 md:w-75">
            <div className="bg-linear-to-br from-green-600 to-emerald-900 p-3 rounded-2xl mb-3 transition transform hover:scale-110">
              <PiggyBank className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl text-black font-semibold mb-1">
              Affordable Pricing
            </h1>
            <p className="text-sm sm:text-base text-black max-w-xs">
              Competitive rates without compromising on quality or
              effectiveness.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm text-center flex flex-col items-center px-4 py-6 transition transform hover:scale-105 w-full sm:w-70 md:w-75">
            <div className="bg-linear-to-br from-green-600 to-emerald-900 p-3 rounded-2xl mb-3 transition transform hover:scale-110">
              <CircleGauge className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl text-black font-semibold mb-1">
              Response
            </h1>
            <p className="text-sm sm:text-base text-black max-w-xs">
              Quick scheduling and prompt service when you need it most.
            </p>
          </div>
        </div>
      </Fadeup>
    </div>
  );
};

export default SecondSection;
