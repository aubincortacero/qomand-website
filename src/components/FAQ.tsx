"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Faut-il télécharger une application ?",
    a: "Non. Ni vous ni vos clients n'avez besoin d'installer quoi que ce soit. Qomand fonctionne entièrement depuis le navigateur web, sur tous les smartphones.",
  },
  {
    q: "Comment fonctionne l'essai gratuit de 7 jours ?",
    a: "Dès la création de votre compte, vous accédez à toutes les fonctionnalités pendant 7 jours sans restriction. Aucune carte bancaire n'est requise pour démarrer.",
  },
  {
    q: "Qu'est-ce que le 1 % par commande ?",
    a: "En plus de l'abonnement à 20 €/mois, Qomand prélève 1 % du montant de chaque commande encaissée en ligne via la plateforme. Les commandes sans paiement intégré ne sont pas concernées.",
  },
  {
    q: "Puis-je annuler mon abonnement à tout moment ?",
    a: "Oui. Aucun engagement de durée. Vous pouvez résilier depuis votre espace client quand vous le souhaitez. Vous conservez l'accès jusqu'à la fin de la période en cours.",
  },
  {
    q: "Comment mes clients accèdent-ils au menu ?",
    a: "Ils pointent l'appareil photo de leur smartphone vers le QR code posé sur leur table. Le menu s'ouvre directement dans leur navigateur, sans téléchargement ni compte à créer.",
  },
  {
    q: "Peut-on utiliser Qomand sans proposer le paiement en ligne ?",
    a: "Oui. Le module de paiement est entièrement optionnel. Vous pouvez utiliser Qomand uniquement pour la gestion du menu et la réception des commandes.",
  },
  {
    q: "Combien de restaurants puis-je gérer avec un abonnement ?",
    a: "Chaque abonnement couvre un établissement. Contactez-nous à contact@qomand.fr pour un tarif multi-restaurants.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-[720px] px-5">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Questions{" "}
              <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Vous ne trouvez pas votre réponse ?{" "}
              <a
                href="mailto:contact@qomand.fr"
                className="text-primary no-underline hover:underline"
              >
                contact@qomand.fr
              </a>
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-light">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-muted transition-transform duration-200"
                    style={{
                      transform:
                        open === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: open === i ? "1fr" : "0fr",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-5 pt-4 text-sm leading-relaxed text-muted">
                      {faq.a}
                    </div>
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
