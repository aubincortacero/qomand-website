"use client";

import { REGISTER_URL, PRICING } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-24">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(232,83,29,0.1) 0%, transparent 60%)",
        }}
      />

      <FadeIn>
        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Prêt à moderniser{" "}
            <span className="gradient-text">votre restaurant ?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Commencez votre essai gratuit de {PRICING.trialDays} jours. Sans
            carte bancaire. Sans engagement.
          </p>
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl"
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
        </div>
      </FadeIn>
    </section>
  );
}
