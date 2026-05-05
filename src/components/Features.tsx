"use client";

import FadeIn from "./FadeIn";
import { useRef } from "react";

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
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="features" className="relative overflow-hidden py-24">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(231,111,81,0.06) 0%, transparent 70%)",
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

        {/* Slider controls */}
        <div className="mb-6 flex justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="Précédent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="Suivant"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group h-[400px] w-[320px] flex-shrink-0 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-light hover:bg-surface-1 flex flex-col justify-end"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
