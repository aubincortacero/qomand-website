const restaurants = [
  "Le Comptoir Moderne",
  "Brasserie Central",
  "Pizzeria Roma",
  "Sushi Zen",
  "Burger Factory",
  "La Table d'Auguste",
];

export default function LogoBar() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "32px 24px",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 24,
            margin: "0 0 24px",
          }}
        >
          Ils nous font confiance
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {restaurants.map((name) => (
            <span
              key={name}
              style={{
                padding: "8px 18px",
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
