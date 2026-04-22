"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

/* ─── Icons matching the app's sidebar nav ─────────────────────────────── */

function IconAccueil({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconMenu({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconTables({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function IconSiteWeb({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-4 4-4 14 0 18" />
      <path d="M12 3c4 4 4 14 0 18" />
      <line x1="3" y1="9"  x2="21" y2="9"  />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  );
}

function IconCommandes({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="9"  y1="8"  x2="15" y2="8"  />
      <line x1="9"  y1="12" x2="15" y2="12" />
      <line x1="9"  y1="16" x2="13" y2="16" />
    </svg>
  );
}

/* ─── Slide definitions ─────────────────────────────────────────────────── */

const slides = [
  {
    id: "accueil",
    label: "Accueil",
    description: "Vue d'ensemble de votre activité en temps réel",
    image: "/demo/Dashboard.png",
    Icon: IconAccueil,
  },
  {
    id: "menu",
    label: "Menu",
    description: "Gérez vos plats, catégories et disponibilités",
    image: "/demo/Menu.png",
    Icon: IconMenu,
  },
  {
    id: "tables",
    label: "Tables",
    description: "Plan de salle et suivi des tables en cours",
    image: "/demo/Plan.png",
    Icon: IconTables,
  },
  {
    id: "site",
    label: "Site web",
    description: "Personnalisez et publiez votre page publique",
    image: "/demo/Website.png",
    Icon: IconSiteWeb,
  },
  {
    id: "commandes",
    label: "Commandes",
    description: "Suivez et gérez toutes les commandes en direct",
    image: "/demo/Commandes.png",
    Icon: IconCommandes,
  },
] as const;

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function DemoSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-[1200px] px-5">

        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Tout gérer depuis un seul endroit
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Découvrez l&apos;interface restaurateur — simple, puissante, en temps réel.
          </p>
        </FadeIn>

        {/* Browser window */}
        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/60">

            {/* Title bar */}
            <div className="flex items-center gap-3 border-b border-border bg-surface-2 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="block h-3 w-3 rounded-full bg-red-500/80" />
                <span className="block h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="block h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex w-48 items-center justify-center gap-1.5 rounded-md bg-surface px-3 py-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3c-4 4-4 14 0 18" />
                  <path d="M12 3c4 4 4 14 0 18" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                </svg>
                <span className="text-xs text-muted">app.qomand.fr</span>
              </div>
              {/* Active tab label */}
              <p className="ml-auto hidden text-xs text-muted sm:block">
                {slides[active].description}
              </p>
            </div>

            {/* Screenshot area */}
            <div className="relative aspect-video bg-surface-1">

              {/* Slides — absolute, crossfade + subtle scale */}
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  aria-hidden={active !== i}
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: active === i ? 1 : 0,
                    pointerEvents: active === i ? "auto" : "none",
                    zIndex: active === i ? 1 : 0,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-left-top"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Floating vertical nav */}
              <nav
                aria-label="Navigation démo"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 hidden md:block"
              >
                <div className="flex flex-col gap-0.5 rounded-xl border border-white/10 bg-black/65 px-1.5 py-1.5 shadow-xl backdrop-blur-md">
                  {slides.map((slide, i) => {
                    const isActive = active === i;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => setActive(i)}
                        title={slide.label}
                        className={[
                          "group flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-all duration-200 cursor-pointer",
                          isActive
                            ? "bg-primary text-white"
                            : "text-white/55 hover:bg-white/10 hover:text-white",
                        ].join(" ")}
                      >
                        <slide.Icon active={isActive} />
                        <span className="text-xs font-medium leading-none">
                          {slide.label}
                        </span>
                        {isActive && (
                          <span className="ml-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </nav>

            </div>
          </div>
        </FadeIn>

        {/* Mobile tab bar (visible below md) */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden no-scrollbar" role="tablist">
          {slides.map((slide, i) => {
            const isActive = active === i;
            return (
              <button
                key={slide.id}
                onClick={() => setActive(i)}
                className={[
                  "flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-white"
                    : "border border-border text-muted hover:text-foreground",
                ].join(" ")}
              >
                <slide.Icon active={isActive} />
                {slide.label}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
