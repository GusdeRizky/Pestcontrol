"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import Fadedown from "../animation/Fadedown";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/lib/constants";
import { useWriteContract, useAccount } from "wagmi";
import { parseEther } from "viem";

const pricingPlans = [
  {
    name: "Basic",
    description: "For small houses or apartments",
    price: "750.000",
    contractId: 1,
    ethPrice: "0.01",
    features: [
      "One-time treatment",
      "General pest inspection",
      "Eco-friendly spray",
      "30-day guarantee",
      "Email support",
    ],
    isPopular: false,
  },
  {
    name: "Premium",
    description: "Complete protection for large estates",
    price: "5.000.000",
    contractId: 3,
    ethPrice: "0.05",
    features: [
      "Maximum Effort",
      "Comprehensive treatment",
      "Regular maintenance visits",
      "Quarterly inspections",
      "24/7 dedicated support",
      "1-year guarantee",
      "Free re-treatments",
    ],
    isPopular: true,
  },
  {
    name: "Standard",
    description: "Perfect for medium-sized family homes",
    price: "2.500.000",
    contractId: 2,
    ethPrice: "0.03",
    features: [
      "Full pest protection",
      "Interior & exterior treatment",
      "All common pests covered",
      "90-day guarantee",
      "Priority scheduling",
      "Follow-up inspection",
    ],
    isPopular: false,
  },
];

const Firstsection = () => {
  const { isConnected } = useAccount(); // Untuk mengecek apakah user sudah connect wallet
  const { writeContract, isPending } = useWriteContract(); // Fungsi eksekusi Web3
  const [loadingId, setLoadingId] = useState<number | null>(null); // Untuk animasi loading di tombol

  // Fungsi yang dijalankan saat tombol beli diklik
  const handleBuy = async (id: number, ethAmount: string) => {
    if (!isConnected) {
      alert("Silakan Connect Wallet terlebih dahulu di pojok kanan atas!");
      return;
    }

    try {
      setLoadingId(id);
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "buyPackage",
        args: [BigInt(id)], // Mengirim ID paket (1, 2, atau 3)
        value: parseEther(ethAmount), // Mengkonversi string "0.01" menjadi format format Wei (angka blockchain)
      });
    } catch (error) {
      console.error("Transaksi gagal:", error);
    } finally {
      // Catatan: isPending dari Wagmi akan otomatis false setelah wallet selesai merespons
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-4">
        <Fadedown>
          <p className="font-semibold text-green-700 tracking-wider text-sm uppercase">
            Pricing Plans
          </p>
        </Fadedown>
        <Fadedown delay={0.1}>
          <h1 className="text-gray-900 font-bold text-4xl sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
        </Fadedown>
        <Fadedown delay={0.2}>
          <h2 className="text-gray-600 text-lg max-w-2xl mx-auto pb-10">
            Choose the perfect plan for your home. All packages include our
            eco-friendly treatments and satisfaction guarantee.
          </h2>
        </Fadedown>
      </div>
      <Fadedown delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 bg-white rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl border 
              ${plan.isPopular
                  ? "border-green-500 ring-4 ring-green-500/10 md:-mt-4 md:mb-4 z-10 scale-100 md:scale-105"
                  : "border-gray-100 hover:border-green-200"
                }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-bold text-4xl text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm h-8">{plan.description}</p>
                <div className="flex justify-center items-baseline gap-1 mt-4">
                  <span className="text-sm font-semibold text-gray-500">
                    Rp
                  </span>
                  <span className="font-bold text-4xl text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <div className="text-green-600 font-medium mt-1">
                  ( ~ {plan.ethPrice} Sepolia ETH )
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  /treatment
                </span>
              </div>

              <div className="flex-1 flex flex-col gap-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0">
                      <Check
                        size={20}
                        className="p-1 bg-green-100 text-green-700 rounded-full"
                      />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/*button Web3*/}
              <button
                onClick={() => handleBuy(plan.contractId, plan.ethPrice)}
                disabled={isPending && loadingId === plan.contractId}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                ${plan.isPopular
                    ? "bg-green-700 text-white hover:bg-green-800 shadow-md hover:shadow-lg"
                    : "bg-white text-green-700 border-2 border-green-700 hover:bg-green-50"
                  }`}
              >
                {isPending && loadingId === plan.contractId
                  ? "Konfirmasi di Wallet..."
                  : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </Fadedown>
    </div>
  );
};

export default Firstsection;
