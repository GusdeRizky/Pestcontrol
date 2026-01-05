import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <p className="font-light text-green-800 tracking-wider text-md">
        PRICING PLANT
      </p>
      <h1 className="text-black font-semibold text-5xl">
        Simple, Transparent Pricing
      </h1>
      <h2 className="text-black font-medium text-lg max-w-2xl text-center">
        Choose the perfect plan for your home. All packages include our
        eco-friendly treatments and satisfaction guarantee.
      </h2>
      <div className="flex pt-5 gap-9">
        {/* satu */}
        <div className="bg-white px-12 py-8 rounded-3xl shadow-md">
          <div className="text-center text-black">
            <h1 className="font-semibold text-4xl">Basic</h1>
            <p className="text-sm my-2">For small houses or apartments</p>
            <h2 className="font-semibold text-4xl my-2">
              Rp 750.000{" "}
              <span className="font-medium text-base">/one-time </span>
            </h2>
          </div>
          <div className="flex-col">
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="border-2 px-20 py-3 font-medium text-md rounded-xl text-green-800 transition transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-white px-12 py-10 rounded-3xl shadow-md">
          <div className="text-center text-black">
            <h1 className="font-semibold text-4xl">Basic</h1>
            <p className="text-sm my-2">For small houses or apartments</p>
            <h2 className="font-semibold text-4xl my-2">
              Rp 750.000{" "}
              <span className="font-medium text-base">/one-time </span>
            </h2>
          </div>
          <div className="flex-col">
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="border-2 px-20 py-3 font-medium text-md rounded-xl text-green-800 transition transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-white px-12 py-8 rounded-3xl shadow-md">
          <div className="text-center text-black">
            <h1 className="font-semibold text-4xl">Basic</h1>
            <p className="text-sm my-2">For small houses or apartments</p>
            <h2 className="font-semibold text-4xl my-2">
              Rp 750.000{" "}
              <span className="font-medium text-base">/one-time </span>
            </h2>
          </div>
          <div className="flex-col">
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="flex pt-4 items-center gap-2">
              <Check
                size={23}
                className="p-1 bg-green-600/25 rounded-full text-green-700"
              />
              <h1 className="text-black text-base font-extralight">
                One-time treatment
              </h1>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="border-2 px-20 py-3 font-medium text-md rounded-xl text-green-800 transition transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
