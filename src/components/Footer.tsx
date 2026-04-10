"use client";

import { REGISTER_URL, LOGIN_URL } from "@/lib/constants";

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Tarifs", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "App",
    links: [
      { label: "Se connecter", href: LOGIN_URL },
      { label: "Créer un compte", href: REGISTER_URL },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "64px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(3, auto)",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "var(--primary)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="18"
                  height="18"
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
                  fontSize: 20,
                  color: "var(--foreground)",
                  letterSpacing: "-0.02em",
                }}
              >
                Qomand
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Menu QR code et commandes en ligne pour les restaurants. Simple,
              rapide, sans application.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 16px",
                }}
              >
                {col.title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--foreground)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--muted)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
            © {new Date().getFullYear()} Qomand. Tous droits réservés.
          </p>
          <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
            Fait avec ❤️ en France
          </p>
        </div>
      </div>
    </footer>
  );
}
