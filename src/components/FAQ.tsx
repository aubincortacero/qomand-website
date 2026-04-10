"use client";

import { useState } from "react";

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
    a: "Oui. Le module de paiement est entièrement optionnel. Vous pouvez utiliser Qomand uniquement pour la gestion du menu et la réception des commandes, et encaisser vous-même par les moyens habituels.",
  },
  {
    q: "Combien de restaurants puis-je gérer avec un abonnement ?",
    a: "Chaque abonnement couvre un établissement. Contactez-nous à contact@qomand.fr pour un tarif multi-restaurants adapté à votre situation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--foreground)",
              margin: "0 0 16px",
            }}
          >
            Questions{" "}
            <span style={{ color: "var(--primary)" }}>fréquentes</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Vous ne trouvez pas votre réponse ? Écrivez-nous à{" "}
            <a
              href="mailto:contact@qomand.fr"
              style={{ color: "var(--primary)", textDecoration: "none" }}
            >
              contact@qomand.fr
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--foreground)",
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--muted)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    flexShrink: 0,
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    borderTop: "1px solid var(--border)",
                    paddingTop: 16,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
