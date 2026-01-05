import Link from "next/link";
import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import Fadedown from "../animation/Fadedown";

const SecondSection = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <Fadedown delay={0.2}>
        <div className="max-w-6xl mx-auto bg-linear-to-br from-green-600 to-emerald-900 rounded-[2.5rem] px-6 py-16 md:px-16 md:py-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-sm font-medium mb-6 text-green-50">
              Custom Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
              Custom House or Building Service
            </h2>

            <p className="text-green-100 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
              For special houses, offices, or large buildings, pricing depends
              on size and pest condition. Contact us for a personalized quote.
            </p>

            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-green-900/20"
            >
              <MessageCircle size={20} />
              <span>Massage Us for Custom Price</span>
            </Link>
          </div>
        </div>
      </Fadedown>
    </section>
  );
};

export default SecondSection;
