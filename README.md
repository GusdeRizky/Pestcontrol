# DaniPest - Decentralized Eco-Friendly Pest Control Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://pestcontrol-bice.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Blockchain](https://img.shields.io/badge/Web3-Enabled-blue?style=for-the-badge&logo=ethereum)](https://ethereum.org/)

**DaniPest** adalah platform layanan pengendalian hama terintegrasi yang menggabungkan solusi ramah lingkungan dengan transparansi teknologi Blockchain. Dibangun untuk memberikan kepastian layanan melalui Smart Contract dan pengalaman pengguna yang modern.

🔗 **Live Website:** [https://pestcontrol-bice.vercel.app/](https://pestcontrol-bice.vercel.app/)

---

## 🌟 Fitur Utama

- **🛡️ Layanan Terverifikasi On-Chain**: Semua pembelian paket layanan (Basic, Standard, Premium) dicatat langsung di blockchain untuk transparansi maksimal.
- **⚡ Dashboard Real-time**: Pantau status paket aktif Anda langsung dari dashboard yang terhubung ke Smart Contract.
- **🎨 UI Modern & Responsif**: Desain premium menggunakan Tailwind CSS v4 dengan animasi halus dari Framer Motion.
- **🔐 Integrasi Wallet**: Mendukung koneksi berbagai wallet (MetaMask, Coinbase, dll) melalui RainbowKit & Wagmi.
- **🌿 Eco-Friendly Approach**: Fokus pada metode pengendalian hama yang aman bagi lingkungan dan penghuni bangunan.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Blockchain Interface**: [Wagmi](https://wagmi.sh/) & [Viem](https://viem.sh/)
- **Wallet Connection**: [RainbowKit](https://www.rainbowkit.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## ⛓️ Smart Contract Details

Proyek ini terintegrasi dengan Smart Contract pada jaringan Ethereum (EVM-Compatible):

- **Contract Address:** `0x29bA60F5DFD3780981bd993B7f1948888301b3aE`
- **Owner Address:** `0x4b05Efae8d029b914e9Cf36A5DE4d12D6BF9E312`
- **Functions:**
  - `buyPackage(uint256 _id)`: Membeli paket layanan.
  - `getUserPackages(address _user)`: Mengambil riwayat paket pengguna.
  - `withdrawFunds()`: Penarikan dana oleh pemilik kontrak.

---

## 🚀 Instalasi & Development

### Prasyarat
- Node.js (v18.0.0+)
- Browser dengan Wallet Extension (seperti MetaMask)

### Langkah-langkah
1. **Clone Repository**
   ```bash
   git clone https://github.com/GusdeRizky/Pestcontrol.git
   cd dani_pest
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Struktur Proyek

```text
dani_pest/
├── app/                    # Routing & Pages (Next.js App Router)
├── components/            # UI Components (Reusable & Page Specific)
├── lib/                   # Utility & Blockchain Config (ABI, Constants)
├── public/                # Static Assets (Images, Icons)
├── project_description.txt # Detailed AI-Friendly Context
└── README.md              # Dokumentasi ini
```

---

## 📞 Hubungi Kami
Siap melindungi properti Anda dengan teknologi masa depan? Hubungi tim ahli kami melalui platform DaniPest.

**Salam Sehat dan 5 Sempurna!** 🌿
