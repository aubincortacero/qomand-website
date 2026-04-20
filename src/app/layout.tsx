import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Qomand — Menu QR code pour restaurants",
  description:
    "Qomand permet à vos clients de commander depuis leur table via un QR code. Gérez votre menu en temps réel, suivez les commandes et encaissez en ligne.",
  openGraph: {
    title: "Qomand — Menu QR code pour restaurants",
    description:
      "Qomand permet à vos clients de commander depuis leur table via un QR code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
