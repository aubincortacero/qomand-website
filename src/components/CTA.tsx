"use client";

import { REGISTER_URL, PRICING } from "@/lib/constants";

export default function CTA() {
  return (
    <section
      style={{
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(232,83,29,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--foreground)",
            margin: "0 0 20px",
            lineHeight: 1.1,
          }}
        >
          Prêt à moderniser{" "}
          <span style={{ color: "var(--primary)" }}>votre restaurant ?</span>
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "var(--muted)",
            lineHeight: 1.65,
            margin: "0 auto 48px",
            maxWidth: 500,
          }}
        >
          Commencez votre essai gratuit de {PRICING.trialDays} jours. Sans
          carte bancaire. Sans engagement.
        </p>

        <a
          href={REGISTER_URL}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--primary)",
            color: "white",
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 600,
            padding: "16px 32px",
            borderRadius: 10,
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--primary-hover)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--primary)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Démarrer l'essai gratuit
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
