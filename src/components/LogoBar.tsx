const restaurants = [
  "Le Comptoir Moderne",
  "Brasserie Central",
  "Pizzeria Roma",
  "Sushi Zen",
  "Burger Factory",
  "La Table d'Auguste",
  "Chez Marcel",
  "L'Atelier Gourmand",
];

export default function LogoBar() {
  return (
    <section className="overflow-hidden border-y border-border bg-surface py-8">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
        Ils nous font confiance
      </p>
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

        {/* Marquee */}
        <div className="flex w-max animate-marquee gap-6">
          {[...restaurants, ...restaurants].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 rounded-lg border border-border bg-surface-1 px-5 py-2.5 text-sm font-medium text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
