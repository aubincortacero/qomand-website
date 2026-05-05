"use client";

import { REGISTER_URL, PRICING } from "@/lib/constants";
import FadeIn from "./FadeIn";

const included = [
  "Menu QR code illimité",
  "Plan de table interactif",
  "Commandes reçues en temps réel",
  "Pickup & collect disponible",
  "Paiement en ligne intégré",
  "Support local réactif",
  "Mises à jour incluses",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Un seul tarif,{" "}
              <span className="gradient-text">sans surprise</span>
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Commencez gratuitement, payez uniquement quand vous êtes convaincu.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-md">
            {/* Glowing card */}
            <div className="relative rounded-3xl">
              {/* Glow border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/40 via-primary/10 to-primary/30" />

              <div className="relative rounded-3xl bg-surface p-8 md:p-10">
                {/* Trial badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-xs font-semibold text-primary">
                    Plan Pro - {PRICING.trialDays} jours gratuits
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2 flex items-end gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-foreground md:text-6xl">
                    {PRICING.monthly}€
                  </span>
                  <span className="pb-2 text-base font-medium text-muted">
                    / mois
                  </span>
                </div>

                <p className="mb-8 text-sm text-muted">
                  + {PRICING.commissionPercent}% par commande encaissée
                </p>

                <div className="mb-7 border-t border-border" />

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3.5">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="shrink-0 text-primary"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={REGISTER_URL}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Démarrer l&apos;essai gratuit
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

                <p className="mt-4 text-center text-xs text-muted">
                  Par IBAN / Annulation à tout moment
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
