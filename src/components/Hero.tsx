"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { REGISTER_URL, PRICING } from "@/lib/constants";

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[580px] w-[280px] animate-float">
      {/* Glow behind phone */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />

      {/* Phone frame */}
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border-[6px] border-border-light bg-black shadow-2xl shadow-black/60">
        {/* Notch */}
        <div
          className="absolute left-0 top-0 flex w-full items-center justify-center"
          style={{
            zIndex: 10,
            background: "transparent",
            height: "15px",
          }}
        >
          <div className="h-3 w-24 rounded-b-xl bg-zinc-900" />
        </div>

        {/* Screenshot – place your mobile screenshot at /public/phone-hero.png */}
        <div className="pb-5 relative h-[calc(100%-20px)] w-full overflow-hidden">
          <Image
            src="/phone-hero.jpg"
            alt="Interface Qomand — commande depuis la table"
            fill
            className="object-cover object-top"
            priority
          />
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
                  href="#demo"
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
