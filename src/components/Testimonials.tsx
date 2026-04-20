import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Depuis qu'on utilise Qomand, on a quasiment éliminé les erreurs de commande. Les clients adorent commander depuis leur table.",
    name: "Sophie M.",
    role: "Gérante",
    restaurant: "Brasserie Central",
    initials: "SM",
  },
  {
    quote:
      "Mis en place en moins d'une heure. Le QR code sur les tables et c'était parti. Je mets à jour la carte depuis mon téléphone.",
    name: "Karim T.",
    role: "Propriétaire",
    restaurant: "Burger Factory",
    initials: "KT",
  },
  {
    quote:
      "On tourne les tables beaucoup plus vite. Les clients paient eux-mêmes, c'est un vrai plus sur notre chiffre d'affaires.",
    name: "Laura D.",
    role: "Directrice",
    restaurant: "Le Comptoir Moderne",
    initials: "LD",
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Ce que disent{" "}
              <span className="gradient-text">nos restaurateurs</span>
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Des centaines de restaurants ont déjà transformé leur service avec
              Qomand.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface-1 p-7 transition-all duration-300 hover:border-border-light">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="var(--color-primary)"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/15 text-xs font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">
                      {t.role} · {t.restaurant}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
