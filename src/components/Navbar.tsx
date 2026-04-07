"use client";

export default function Navbar() {
  return (
    <header
      style={{
        background: "rgba(10,10,10,0.85)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "var(--primary)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden-mobile"
        >
          {["Fonctionnalités", "Tarifs", "À propos"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Connexion
          </a>
          <a
            href="#"
            style={{
              background: "var(--primary)",
              color: "white",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              padding: "9px 18px",
              borderRadius: 8,
              transition: "background 0.2s, opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background =
                "var(--primary-hover)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "var(--primary)")
            }
          >
            Essai gratuit
          </a>
        </div>
      </div>
    </header>
  );
}
