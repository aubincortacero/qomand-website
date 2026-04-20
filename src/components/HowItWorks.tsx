import FadeIn from "./FadeIn";

const steps = [
  {
    number: 1,
    title: "Créez votre menu",
    description:
      "Ajoutez vos plats, catégories, photos et prix depuis votre tableau de bord en quelques minutes.",
  },
  {
    number: 2,
    title: "Imprimez votre QR code",
    description:
      "Téléchargez le QR code unique de votre restaurant et disposez-le sur vos tables.",
  },
  {
    number: 3,
    title: "Recevez les commandes",
    description:
      "Vos clients commandent et paient depuis leur téléphone. Vous recevez chaque commande en temps réel.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-border bg-surface py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Opérationnel en{" "}
              <span className="gradient-text">moins de 5 minutes</span>
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Trois étapes simples pour transformer l&apos;expérience de vos
              clients.
            </p>
          </div>
        </FadeIn>

        <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[72px] z-0 hidden md:block">
            <div className="mx-auto h-px w-[66%] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="relative flex flex-col items-center rounded-2xl border border-border bg-surface-1 p-8 text-center transition-all duration-300 hover:border-border-light">
                {/* Number */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-xl font-extrabold text-white shadow-lg shadow-primary/20">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
