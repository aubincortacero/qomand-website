const testimonials = [
  {
    quote:
      "Depuis qu'on utilise Qomand, on a quasiment éliminé les erreurs de commande. Les clients adorent commander depuis leur table, et nous on gagne un temps fou en salle.",
    name: "Sophie M.",
    role: "Gérante",
    restaurant: "Brasserie Central",
    initials: "SM",
  },
  {
    quote:
      "Mis en place en moins d'une heure. Le QR code sur les tables et c'était parti. Je mets à jour la carte depuis mon téléphone entre deux services — vraiment pratique.",
    name: "Karim T.",
    role: "Propriétaire",
    restaurant: "Burger Factory",
    initials: "KT",
  },
  {
    quote:
      "On tourne les tables beaucoup plus vite maintenant que les clients peuvent payer eux-mêmes. C'est un vrai plus sur notre chiffre d'affaires au déjeuner.",
    name: "Laura D.",
    role: "Directrice",
    restaurant: "Le Comptoir Moderne",
    initials: "LD",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "96px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            Ce que disent{" "}
            <span style={{ color: "var(--primary)" }}>nos restaurateurs</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Des centaines de restaurants ont déjà transformé leur service avec
            Qomand.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Quote marks */}
              <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                style={{ color: "var(--primary)", opacity: 0.6 }}
              >
                <path
                  d="M0 20V12.4C0 5.56 3.76 1.4 11.28 0L12.4 2.4C9.2 3.24 7.12 5.28 6.16 8.52H11.2V20H0ZM16.8 20V12.4C16.8 5.56 20.56 1.4 28.08 0L29.2 2.4C26 3.24 23.92 5.28 22.96 8.52H28V20H16.8Z"
                  fill="currentColor"
                />
              </svg>

              {/* Quote text */}
              <p
                style={{
                  fontSize: 15,
                  color: "var(--foreground)",
                  lineHeight: 1.75,
                  margin: 0,
                  flex: 1,
                }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(232,83,29,0.15)",
                    border: "1px solid rgba(232,83,29,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--foreground)",
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      margin: "2px 0 0",
                    }}
                  >
                    {t.role} · {t.restaurant}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
