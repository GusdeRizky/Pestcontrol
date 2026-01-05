import React from "react";
import { House, Building2, Cog } from "lucide-react";
import Fadeup from "../animation/Fadeup";

const ThirdSection = () => {
  return (
    <div className="min-h-[90vh] bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4">
      <Fadeup>
        <p className="text-green-900 text-sm sm:text-md font-light mb-1 mt-5">
          OUR SERVICE
        </p>
      </Fadeup>
      <Fadeup delay={0.1}>
        <h1 className="text-black font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 mb-3 text-center">
          Comprehensive Pest Solutions
        </h1>
      </Fadeup>
      <Fadeup delay={0.1}>
        <h2 className="text-green-950 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-3xl text-center">
          From homes to commercial buildings, we offer specialized services to
          keep every space pest-free.
        </h2>
      </Fadeup>
      <Fadeup delay={0.3}>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-7 mt-8 mb-6 w-full">
          {/* CARD 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm flex flex-col px-6 py-6 transition transform hover:scale-105 w-full sm:w-75 md:w-[320px]">
            <House className="h-12 w-12 text-white bg-linear-to-br from-green-600 to-emerald-900 p-2 rounded-xl transition transform hover:scale-105" />
            <h1 className="text-lg sm:text-xl text-black font-semibold mt-4 mb-1">
              Home Pest Control
            </h1>
            <div className="mb-3 text-sm sm:text-base text-black">
              Complete protection for residential properties, apartments, and
              condos.
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Interior & Exterior</li>
                <li>Safe for Families</li>
                <li>Pet-Friendly</li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm flex flex-col px-6 py-6 transition transform hover:scale-105 w-full sm:w-75 md:w-[320px]">
            <Building2 className="h-12 w-12 text-white bg-linear-to-br from-green-600 to-emerald-900 p-2 rounded-xl transition transform hover:scale-105" />
            <h1 className="text-lg sm:text-xl text-black font-semibold mt-4 mb-1">
              Office & Building Pest Control
            </h1>
            <div className="mb-3 text-sm sm:text-base text-black">
              Professional solutions for commercial spaces and multi-unit
              buildings.
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Minimal Disruption</li>
                <li>Flexible Scheduling</li>
                <li>Regular Maintenance</li>
              </ul>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm flex flex-col px-6 py-6 transition transform hover:scale-105 w-full sm:w-75 md:w-[320px]">
            <Cog className="h-12 w-12 text-white bg-linear-to-br from-green-600 to-emerald-900 p-2 rounded-xl transition transform hover:scale-105" />
            <h1 className="text-lg sm:text-xl text-black font-semibold mt-4 mb-1">
              Custom Treatment Plans
            </h1>
            <div className="mb-3 text-sm sm:text-base text-black">
              Tailored pest management for unique situations and special
              requirements.
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Personalized Approach</li>
                <li>Expert Consultation</li>
                <li>Long-term Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </Fadeup>
    </div>
  );
};

export default ThirdSection;
