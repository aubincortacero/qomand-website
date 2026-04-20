"use client";

import FadeIn from "./FadeIn";
import { REGISTER_URL, PRICING } from "@/lib/constants";

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[580px] w-[280px] animate-float">
      {/* Glow behind phone */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />

      {/* Phone frame */}
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-border-light bg-gradient-to-b from-surface-2 to-surface shadow-2xl shadow-black/60">
        {/* Notch */}
        <div className="relative flex h-10 items-end justify-center pb-0.5">
          <div className="h-5 w-20 rounded-b-xl bg-black" />
        </div>

        {/* Screen content */}
        <div className="px-3.5 pb-3">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-foreground">
                La Table d&apos;Auguste
              </p>
              <p className="text-[10px] text-muted">Table 4 · 2 convives</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-2 py-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
              <span className="text-[10px] font-semibold text-foreground">
                0
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="mb-3 rounded-xl border border-border bg-surface-2 px-3 py-2">
            <p className="text-[10px] text-muted">🔍 Rechercher un plat...</p>
          </div>

          {/* Categories */}
          <div className="mb-3 flex gap-1.5 overflow-hidden">
            <div className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-white">
              Entrées
            </div>
            <div className="shrink-0 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] text-muted">
              Plats
            </div>
            <div className="shrink-0 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] text-muted">
              Desserts
            </div>
            <div className="shrink-0 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] text-muted">
              Boissons
            </div>
          </div>

          {/* Food items */}
          <div className="space-y-2">
            {[
              {
                name: "Tartare de saumon",
                desc: "Avocat, sésame, agrumes",
                price: "14,50 €",
                gradient: "from-amber-900/40 to-orange-900/20",
              },
              {
                name: "Velouté de champignons",
                desc: "Crème de truffe, croûtons",
                price: "7,00 €",
                gradient: "from-emerald-900/30 to-green-900/20",
              },
              {
                name: "Œufs mimosa",
                desc: "Mayonnaise maison, ciboulette",
                price: "2,50 €",
                gradient: "from-yellow-900/30 to-amber-900/20",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-xl border border-border bg-surface-2"
              >
                <div
                  className={`h-16 bg-gradient-to-br ${item.gradient}`}
                />
                <div className="p-2.5">
                  <p className="text-[11px] font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[9px] text-muted">{item.desc}</p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary">
                      {item.price}
                    </span>
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-white">
                      +
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart bar */}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-primary p-2.5">
            <div>
              <p className="text-[9px] text-white/70">Panier</p>
              <p className="text-[11px] font-bold text-white">0,00 €</p>
            </div>
            <p className="text-[10px] font-semibold text-white">
              Voir le panier →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] left-1/2 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,83,29,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <FadeIn delay={0}>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border-light bg-surface-1 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-medium text-muted">
                  Essai gratuit {PRICING.trialDays} jours · Sans carte bancaire
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Vos clients commandent et paient{" "}
                <span className="gradient-text">depuis leur table</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Créez votre menu digital en 5 minutes. Vos clients scannent le
                QR code, commandent et paient — sans application à télécharger.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl"
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
                  className="inline-flex items-center gap-2 rounded-xl border border-border-light px-6 py-3.5 text-base font-medium text-foreground no-underline transition-all hover:border-muted hover:-translate-y-0.5"
                >
                  Voir la démo
                </a>
              </div>
            </FadeIn>

            {/* Social proof chips */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { icon: "📱", label: "Sans application" },
                  { icon: "⚡", label: "Temps réel" },
                  { icon: "💳", label: "Paiement intégré" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2"
                  >
                    <span className="text-sm">{icon}</span>
                    <span className="text-xs font-medium text-muted">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Phone mockup */}
          <FadeIn delay={0.3} direction="right" className="hidden lg:block">
            <PhoneMockup />
          </FadeIn>
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.5}>
          <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface/80 px-8 py-8 md:grid-cols-4 md:gap-8">
            {[
              { value: "200+", label: "Restaurants actifs" },
              { value: "50K+", label: "Commandes / mois" },
              { value: "<5min", label: "Pour démarrer" },
              { value: "4.9/5", label: "Satisfaction client" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs font-medium text-muted md:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
