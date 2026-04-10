"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 24px 140px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 999,
            padding: "6px 14px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--primary)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 13,
              color: "var(--muted)",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            Menu QR code · Commande en ligne · Paiement à table
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(38px, 5.5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--foreground)",
            margin: "0 0 24px",
          }}
        >
          Votre menu en ligne,{" "}
          <span style={{ color: "var(--primary)" }}>scanné en secondes</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--muted)",
            lineHeight: 1.65,
            maxWidth: 580,
            margin: "0 auto 48px",
            fontWeight: 400,
          }}
        >
          Offrez à vos clients un menu interactif via QR code. Gérez vos plats
          en temps réel, recevez les commandes directement en cuisine et
          encaissez sans TPE.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
            marginBottom: 72,
          }}
        >
          <a
            href="https://app.qomand.fr/register"
            style={{
              background: "var(--primary)",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--primary-hover)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--primary)";
              el.style.transform = "translateY(0)";
            }}
          >
            Créer mon menu gratuitement
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
          <a
            href="#how-it-works"
            style={{
              background: "transparent",
              color: "var(--foreground)",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: 10,
              border: "1px solid var(--border)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--muted)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.transform = "translateY(0)";
            }}
          >
            Voir une démo
          </a>
        </div>

        {/* Feature chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {[
            { icon: "📱", label: "Menu sans application" },
            { icon: "⚡", label: "Mise à jour en temps réel" },
            { icon: "💳", label: "Paiement intégré" },
            { icon: "📊", label: "Statistiques incluses" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 14px",
              }}
            >
              <span style={{ fontSize: 14 }}>{icon}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* QR mock card */}
      <div
        style={{
          maxWidth: 900,
          margin: "80px auto 0",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: "40px 40px 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Gradient overlay at bottom */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background:
              "linear-gradient(to top, var(--background) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Mock UI browser bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              style={{ width: 12, height: 12, borderRadius: "50%", background: c }}
            />
          ))}
          <div
            style={{
              flex: 1,
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              height: 28,
              display: "flex",
              alignItems: "center",
              paddingLeft: 12,
            }}
          >
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              menu.qomand.app/le-bistrot
            </span>
          </div>
        </div>

        {/* Mock menu content */}
        <div
          style={{
            background: "var(--surface-1)",
            borderRadius: "12px 12px 0 0",
            padding: "28px 28px 40px",
            border: "1px solid var(--border)",
            borderBottom: "none",
            textAlign: "left",
          }}
        >
          {/* Restaurant header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Le Bistrot
              </h2>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "4px 0 0" }}>
                Table 4 · Bonjour Aubin 👋
              </p>
            </div>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span
                style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}
              >
                0 article
              </span>
            </div>
          </div>

          {/* Category tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 24,
              overflowX: "auto",
            }}
          >
            {["Entrées", "Plats", "Desserts", "Boissons"].map((cat, i) => (
              <div
                key={cat}
                style={{
                  padding: "7px 16px",
                  borderRadius: 999,
                  background: i === 0 ? "var(--primary)" : "var(--surface)",
                  color: i === 0 ? "white" : "var(--muted)",
                  fontSize: 13,
                  fontWeight: 600,
                  border: i === 0 ? "none" : "1px solid var(--border)",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Menu items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                name: "Œufs mimosa",
                desc: "Mayonnaise maison, ciboulette fraîche",
                price: "2.50 €",
                tags: ["Végé", "Vegan"],
              },
              {
                name: "Tartare de saumon",
                desc: "Avocat, citron vert, sauce soja",
                price: "9.50 €",
                tags: ["Sans gluten"],
              },
              {
                name: "Velouté de champignons",
                desc: "Crème de truffe, croûtons au beurre",
                price: "7.00 €",
                tags: ["Végé"],
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  gap: 12,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {item.name}
                    </span>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#4ade80",
                          background: "rgba(74,222,128,0.1)",
                          border: "1px solid rgba(74,222,128,0.25)",
                          borderRadius: 4,
                          padding: "1px 7px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--foreground)",
                    }}
                  >
                    {item.price}
                  </span>
                  <button
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "var(--primary)",
                      border: "none",
                      color: "white",
                      fontSize: 20,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
