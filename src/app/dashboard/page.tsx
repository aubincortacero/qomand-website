import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/actions/auth";
import { APP_URL, PRICING } from "@/lib/constants";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const name =
    (user?.user_metadata?.full_name as string) ||
    user?.email?.split("@")[0] ||
    "Vous";

  // Calculate trial days remaining (7-day trial from account creation)
  const createdAt = user?.created_at ? new Date(user.created_at) : new Date();
  const trialEndsAt = new Date(createdAt);
  trialEndsAt.setDate(trialEndsAt.getDate() + PRICING.trialDays);
  const now = new Date();
  const daysLeft = Math.max(
    0,
    Math.ceil((trialEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );
  const isTrialActive = daysLeft > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          background: "rgba(10,10,10,0.9)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                background: "var(--primary)",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
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
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "var(--foreground)",
                letterSpacing: "-0.02em",
              }}
            >
              Qomand
            </span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>
              {user?.email}
            </span>
            <form action={signOut}>
              <button
                type="submit"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: 13,
                  color: "var(--muted)",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </header>

      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Welcome */}
        <div style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: "0 0 6px",
            }}
          >
            Bonjour, {name} 👋
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 15, margin: 0 }}>
            Votre espace Qomand — gérez votre restaurant depuis un seul endroit.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {/* Trial status card */}
          <div
            style={{
              background: isTrialActive
                ? "linear-gradient(135deg, rgba(232,83,29,0.08) 0%, var(--surface) 60%)"
                : "var(--surface)",
              border: `1px solid ${isTrialActive ? "rgba(232,83,29,0.35)" : "var(--border)"}`,
              borderRadius: 14,
              padding: "28px 28px 24px",
              gridColumn: "1 / -1",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: isTrialActive
                      ? "rgba(232,83,29,0.15)"
                      : "var(--surface-1)",
                    border: `1px solid ${isTrialActive ? "rgba(232,83,29,0.3)" : "var(--border)"}`,
                    borderRadius: 999,
                    padding: "4px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: isTrialActive ? "var(--primary)" : "var(--muted)",
                    marginBottom: 14,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: isTrialActive
                        ? "var(--primary)"
                        : "var(--muted)",
                      display: "inline-block",
                    }}
                  />
                  {isTrialActive ? "Essai gratuit actif" : "Essai expiré"}
                </div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    margin: "0 0 6px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {isTrialActive
                    ? `${daysLeft} jour${daysLeft > 1 ? "s" : ""} restant${daysLeft > 1 ? "s" : ""}`
                    : "Votre essai est terminé"}
                </h2>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 14,
                    margin: 0,
                    maxWidth: 440,
                    lineHeight: 1.55,
                  }}
                >
                  {isTrialActive
                    ? `Profitez pleinement de toutes les fonctionnalités Qomand. Votre essai se termine le ${trialEndsAt.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}.`
                    : "Votre période d'essai est terminée. Passez à un abonnement pour continuer à utiliser Qomand."}
                </p>
              </div>
              <a
                href={`${APP_URL}/onboarding`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--primary)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 22px",
                  borderRadius: 10,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {isTrialActive ? "Démarrer l'app" : "Choisir un forfait"}
                <svg
                  width="14"
                  height="14"
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
          </div>

          {/* Open app */}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "24px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transition: "border-color 0.2s",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  margin: "0 0 4px",
                }}
              >
                Ouvrir l&apos;application
              </p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
                Gérez votre menu, suivez les commandes en temps réel.
              </p>
            </div>
          </a>

          {/* Manage menu */}
          <a
            href={`${APP_URL}/menu`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "24px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transition: "border-color 0.2s",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  margin: "0 0 4px",
                }}
              >
                Gérer le menu
              </p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
                Ajoutez, modifiez ou supprimez vos plats en temps réel.
              </p>
            </div>
          </a>

          {/* QR code */}
          <a
            href={`${APP_URL}/qr`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "24px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transition: "border-color 0.2s",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
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
            </div>
            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  margin: "0 0 4px",
                }}
              >
                Mon QR code
              </p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
                Téléchargez et imprimez vos QR codes pour chaque table.
              </p>
            </div>
          </a>

          {/* Help */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  margin: "0 0 4px",
                }}
              >
                Besoin d&apos;aide ?
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: "0 0 14px",
                  lineHeight: 1.5,
                }}
              >
                Notre équipe est disponible pour vous aider à configurer votre
                espace.
              </p>
              <a
                href="mailto:support@qomand.fr"
                style={{
                  fontSize: 13,
                  color: "var(--primary)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Contacter le support →
              </a>
            </div>
          </div>
        </div>

        {/* Account info */}
        <div
          style={{
            marginTop: 32,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "24px 28px",
          }}
        >
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              margin: "0 0 16px",
            }}
          >
            Mon compte
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: "0 0 2px" }}>
                Email
              </p>
              <p style={{ fontSize: 14, color: "var(--foreground)", margin: 0 }}>
                {user?.email}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: "0 0 2px" }}>
                Restaurant
              </p>
              <p style={{ fontSize: 14, color: "var(--foreground)", margin: 0 }}>
                {(user?.user_metadata?.full_name as string) || "—"}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: "0 0 2px" }}>
                Membre depuis
              </p>
              <p style={{ fontSize: 14, color: "var(--foreground)", margin: 0 }}>
                {createdAt.toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: "0 0 2px" }}>
                Forfait
              </p>
              <p style={{ fontSize: 14, color: "var(--foreground)", margin: 0 }}>
                {isTrialActive ? `Essai gratuit (${daysLeft}j restants)` : "Aucun abonnement actif"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
