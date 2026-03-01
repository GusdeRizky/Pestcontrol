"use client";

import React, { useState } from "react";
import { Bug, Menu, X } from "lucide-react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAccount();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-green-800">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <Bug className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <h1 className="text-xl font-bold text-white">
            Andure<span className="text-white font-extralight">Pest</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
          {isConnected && (
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          )}
        </nav>

        <div className="hidden md:block">
          <ConnectButton label="Start Protecting" showBalance={false} chainStatus={"none"} />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col items-center py-6 gap-6 animate-in slide-in-from-top-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-600 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-600 hover:text-green-600"
          >
            Pricing
          </Link>
          {isConnected && (
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-600 hover:text-green-600"
            >
              Dashboard
            </Link>
          )}
          <div className="flex justify-center w-full" onClick={() => setIsOpen(false)}>
            <ConnectButton label="Start Protecting" showBalance={false} chainStatus={"none"} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
