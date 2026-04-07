import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
