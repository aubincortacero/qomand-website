const features = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    ),
    title: "QR code instantané",
    description:
      "Aucune application à télécharger. Vos clients scannent le QR code de leur table et accèdent au menu en une seconde.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Menu en temps réel",
    description:
      "Modifiez vos plats, prix et disponibilités depuis votre téléphone. Les changements sont visibles instantanément par vos clients.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Commandes en cuisine",
    description:
      "Chaque commande arrive directement sur votre écran. Fini les erreurs de retranscription et les allers-retours inutiles.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Paiement à table",
    description:
      "Vos clients règlent depuis leur smartphone. Aucun TPE, aucun ticket, et une rotation des tables sensiblement plus rapide.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{ padding: "96px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.06) 0%, transparent 70%)",
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
            Tout ce dont vous avez besoin,{" "}
            <span style={{ color: "var(--primary)" }}>rien de superflu</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Qomand est conçu pour les restaurateurs qui veulent moderniser leur
            service sans complexifier leur quotidien.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "28px",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--surface-1)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  marginBottom: 20,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: "0 0 10px",
                  letterSpacing: "-0.02em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
