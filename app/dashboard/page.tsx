"use client";

import React from "react";
import { useAccount, useReadContract } from "wagmi";
import { useRouter } from "next/navigation";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/lib/constants";
import { Package, Check, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

const OWNER_ADDRESS = "0x4b05Efae8d029b914e9Cf36A5DE4d12D6BF9E312";

const PACKAGE_DETAILS: Record<
    number,
    { name: string; price: string; color: string; desc: string }
> = {
    1: {
        name: "Basic Plan",
        price: "Rp 750.000",
        color: "bg-green-100 text-green-800",
        desc: "One-time treatment & General inspection",
    },
    2: {
        name: "Standard Plan",
        price: "Rp 2.500.000",
        color: "bg-blue-100 text-blue-800",
        desc: "90-day protection & Full coverage",
    },
    3: {
        name: "Premium Plan",
        price: "Rp 5.000.000",
        color: "bg-purple-100 text-purple-800",
        desc: "1 Year Guarantee & VIP Support",
    },
};

export default function DashboardPage() {
    const { address, isConnected } = useAccount();
    const router = useRouter();

    const isOwner =
        address?.toLowerCase() === OWNER_ADDRESS.toLowerCase();

    // Membaca data dari Smart Contract
    const { data: userPackages, isLoading, isError } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "getUserPackages",
        args: [address as `0x${string}`],
        query: {
            enabled: !!address && !isOwner, // owner tidak perlu fetch paket
        },
    });

    if (!isConnected) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
                    <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Akses Dibatasi
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Anda harus menghubungkan dompet terlebih dahulu untuk melihat dashboard paket Anda.
                    </p>
                    <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-500">
                        Silakan klik tombol Connect Wallet di pojok kanan atas.
                    </div>
                </div>
            </div>
        );
    }


    if (isOwner) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Selamat Datang Admin 👑
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Anda terhubung sebagai pemilik smart contract DaniPest.
                        Kelola sistem dan pantau aktivitas pengguna dari sini.
                    </p>

                    <div className="bg-green-50 border border-green-200 px-4 py-3 rounded-xl text-sm font-mono text-green-700">
                        {address?.slice(0, 6)}...{address?.slice(-4)}
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard Saya
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Kelola dan lihat riwayat paket layanan DaniPest yang Anda miliki.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-medium text-green-700 font-mono">
                            {address?.slice(0, 6)}...{address?.slice(-4)}
                        </span>
                    </div>
                </div>


                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-green-600 animate-spin mb-4" />
                        <p className="text-gray-500">
                            Mengambil data dari Blockchain...
                        </p>
                    </div>
                )}


                {isError && (
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                        <p className="text-red-600">
                            Terjadi kesalahan saat mengambil data paket.
                        </p>
                    </div>
                )}

                {!isLoading &&
                    userPackages &&
                    (userPackages as bigint[]).length === 0 && (
                        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
                            <Package className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Belum Ada Paket Aktif
                            </h3>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                Sepertinya Anda belum membeli layanan perlindungan hama apapun.
                                Lindungi rumah Anda sekarang.
                            </p>
                            <Link
                                href="/pricing"
                                className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors"
                            >
                                Lihat Pilihan Paket
                            </Link>
                        </div>
                    )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userPackages &&
                        (userPackages as bigint[]).map((idBigInt, index) => {
                            const id = Number(idBigInt);
                            const details = PACKAGE_DETAILS[id] || {
                                name: "Paket Tidak Dikenal",
                                price: "-",
                                color: "bg-gray-100",
                                desc: "-",
                            };

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div
                                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${details.color}`}
                                        >
                                            Aktif
                                        </div>
                                        <Package className="text-gray-400 w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {details.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {details.desc}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                                            <Check className="w-4 h-4" />
                                            <span>Pembayaran Terkonfirmasi</span>
                                        </div>
                                        <div className="text-xs text-gray-400 mt-2">
                                            ID Paket: #{id}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}