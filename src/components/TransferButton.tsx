"use client";

import { transferToApp } from "@/lib/auth-transfer";

interface TransferButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Bouton qui transfère la session vers l'app avant de rediriger
 */
export function TransferButton({ href, children, style }: TransferButtonProps) {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await transferToApp(href);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        border: "none",
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        textAlign: "inherit",
        font: "inherit",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
