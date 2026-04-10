import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          marginBottom: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: "var(--primary)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <circle cx="17.5" cy="17.5" r="2" />
            <path d="M14 14h4" />
            <path d="M17 14v4" />
          </svg>
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: 22,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
          }}
        >
          Qomand
        </span>
      </a>

      <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
        {children}
      </div>
    </div>
  );
}
