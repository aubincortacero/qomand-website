"use client";

import { REGISTER_URL, PRICING } from "@/lib/constants";

const included = [
  "Menu QR code illimité",
  "Commandes reçues en temps réel",
  "Paiement en ligne intégré",
  "Statistiques & rapports",
  "Support prioritaire par email",
  "Mises à jour incluses",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "96px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--foreground)",
              margin: "0 0 16px",
            }}
          >
            Un seul tarif,{" "}
            <span style={{ color: "var(--primary)" }}>sans surprise</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Commencez gratuitement, payez uniquement quand vous êtes
            convaincu.
          </p>
        </div>

        {/* Pricing card */}
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "40px",
              position: "relative",
            }}
          >
            {/* Trial badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(232,83,29,0.12)",
                border: "1px solid rgba(232,83,29,0.3)",
                borderRadius: 999,
                padding: "5px 14px",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--primary)",
                }}
              >
                {PRICING.trialDays} jours gratuits — sans carte bancaire
              </span>
            </div>

            {/* Plan name */}
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              Plan Pro
            </p>

            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 6,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(48px, 6vw, 64px)",
                  fontWeight: 800,
                  color: "var(--foreground)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {PRICING.monthly}€
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  fontWeight: 500,
                  paddingBottom: 6,
                }}
              >
                / mois
              </span>
            </div>

            {/* Commission note */}
            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                margin: "0 0 32px",
              }}
            >
              + {PRICING.commissionPercent}% par commande encaissée
            </p>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                marginBottom: 28,
              }}
            />

            {/* Feature list */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {included.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 15,
                    color: "var(--foreground)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={REGISTER_URL}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "var(--primary)",
                color: "white",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 600,
                padding: "16px 28px",
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

            {/* Sub-note */}
            <p
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "var(--muted)",
                margin: "16px 0 0",
              }}
            >
              Sans carte bancaire · Annulation à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
