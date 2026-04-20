import FadeIn from "./FadeIn";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
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
      "Aucune application à télécharger. Vos clients scannent le QR code et accèdent au menu en une seconde.",
    span: "md:col-span-2",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Menu en temps réel",
    description:
      "Modifiez plats, prix et disponibilités depuis votre téléphone. Changements visibles instantanément.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Commandes en cuisine",
    description:
      "Chaque commande arrive directement sur votre écran. Fini les erreurs et les allers-retours.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Paiement à table",
    description:
      "Vos clients règlent depuis leur smartphone. Aucun TPE nécessaire, rotation des tables plus rapide.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Statistiques & rapports",
    description:
      "Suivez vos ventes, vos plats les plus populaires et vos heures de pointe en temps réel.",
    span: "md:col-span-2",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Multi-langue",
    description:
      "Menu automatiquement traduit pour vos clients internationaux. Français, anglais, espagnol et plus.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Tout ce dont vous avez besoin,{" "}
              <span className="gradient-text">rien de superflu</span>
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Qomand est conçu pour les restaurateurs qui veulent moderniser
              leur service sans complexifier leur quotidien.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08} className={f.span || ""}>
              <div className="glow-card group h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-light hover:bg-surface-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-1 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
