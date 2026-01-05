import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import Fadeup from "../animation/Fadeup";

const ForthSection = () => {
  return (
    <section className="w-full px-6 py-10 bg-white">
      <Fadeup delay={0.2}>
        <div className="bg-linear-to-br from-green-600 to-emerald-900 rounded-3xl  px-10 py-14 text-white">
          <span className="inline-block rounded-full bg-green-600 px-4 py-1 text-sm font-medium mb-6">
            Custom Solutions
          </span>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Professional Pest Control <br />
                Services You Can Trust
              </h1>

              <p className="mt-4 text-green-100 text-base">
                Safe, effective, and eco-friendly pest control for homes and
                buildings. Protect your space with our certified experts.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-green-700 font-semibold shadow hover:bg-green-50 transition">
              <MessageCircle size={18} />
              <Link href="/prcing">Contact via Message</Link>
            </div>
          </div>
        </div>
      </Fadeup>
    </section>
  );
};

export default ForthSection;
