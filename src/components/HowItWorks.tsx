const steps = [
  {
    number: 1,
    title: "Créez votre menu",
    description:
      "Ajoutez vos plats, catégories, photos et prix depuis votre tableau de bord en quelques minutes. Aucune compétence technique requise.",
  },
  {
    number: 2,
    title: "Imprimez votre QR code",
    description:
      "Téléchargez le QR code unique de votre restaurant et disposez-le sur vos tables, votre comptoir ou vos vitrines.",
  },
  {
    number: 3,
    title: "Recevez les commandes",
    description:
      "Vos clients commandent et paient depuis leur téléphone. Vous recevez chaque commande en temps réel sur votre écran.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
            Opérationnel en{" "}
            <span style={{ color: "var(--primary)" }}>moins de 20 minutes</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Trois étapes simples pour transformer l'expérience de vos clients.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            position: "relative",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "40px 28px",
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                position: "relative",
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 24,
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
