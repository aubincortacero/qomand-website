import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/actions/auth";
import { APP_URL, APP_ROUTES, PRICING } from "@/lib/constants";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch profile from DB (single source of truth shared with the app)
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, plan, subscription_status, trial_ends_at, created_at")
    .eq("id", user!.id)
    .single();

  const name =
    (profile?.full_name as string) ||
    (user?.user_metadata?.full_name as string) ||
    user?.email?.split("@")[0] ||
    "Vous";

  const createdAt = profile?.created_at
    ? new Date(profile.created_at)
    : user?.created_at
    ? new Date(user.created_at)
    : new Date();

  const now = new Date();
  const trialEndsAt = profile?.trial_ends_at
    ? new Date(profile.trial_ends_at)
    : null;
  const daysLeft =
    trialEndsAt
      ? Math.max(0, Math.ceil((trialEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
      : 0;
  const subscriptionStatus = profile?.subscription_status ?? "trialing";
  const isTrialActive =
    subscriptionStatus === "trialing" && daysLeft > 0;
  const isSubscribed =
    subscriptionStatus === "active" || subscriptionStatus === "past_due";

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
          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8h1a4 4 0 010 8h-1" />
              <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
              }}
            >
              Qomand
            </span>
          </a>

          {/* Email + Logout */}
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
            Votre espace Qomand, gérez vos commandes depuis un seul endroit.
          </p>
        </div>

        {/* Trial status card - Full width */}
        <div
          style={{
            position: "relative",
            background: isTrialActive || !isSubscribed
              ? "linear-gradient(135deg, rgba(232,83,29,0.12) 0%, rgba(232,83,29,0.05) 100%)"
              : "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, var(--surface) 60%)",
            border: `2px solid ${
              isTrialActive || !isSubscribed
                ? "var(--primary)"
                : "rgba(34,197,94,0.3)"
            }`,
            borderRadius: 16,
            padding: "32px",
            marginBottom: 32,
            boxShadow: isTrialActive || !isSubscribed
              ? "0 4px 24px rgba(232,83,29,0.15)"
              : "none",
          }}
        >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <div style={{ flex: 1, minWidth: 280 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: isSubscribed
                      ? "rgba(34,197,94,0.15)"
                      : "rgba(232,83,29,0.2)",
                    border: `1px solid ${
                      isSubscribed
                        ? "rgba(34,197,94,0.3)"
                        : "rgba(232,83,29,0.4)"
                    }`,
                    borderRadius: 999,
                    padding: "6px 14px",
                    fontSize: 11,
                    fontWeight: 700,
                    color: isSubscribed ? "rgb(34,197,94)" : "var(--primary)",
                    marginBottom: 16,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: isSubscribed ? "rgb(34,197,94)" : "var(--primary)",
                      display: "inline-block",
                      boxShadow: isSubscribed
                        ? "0 0 8px rgba(34,197,94,0.6)"
                        : "0 0 8px rgba(232,83,29,0.6)",
                    }}
                  />
                  {isSubscribed ? "Abonnement actif" : isTrialActive ? "Essai gratuit actif" : "Essai expiré"}
                </div>
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    margin: "0 0 8px",
                    letterSpacing: "-0.03em",
                    color: "var(--foreground)",
                  }}
                >
                  {isSubscribed
                    ? "Abonnement en cours"
                    : isTrialActive
                    ? `${daysLeft} jour${daysLeft > 1 ? "s" : ""} d'essai restant${daysLeft > 1 ? "s" : ""}`
                    : "Votre essai est terminé"}
                </h2>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 15,
                    margin: 0,
                    maxWidth: 520,
                    lineHeight: 1.6,
                  }}
                >
                  {isSubscribed
                    ? "Toutes les fonctionnalités sont disponibles. Merci de nous faire confiance !"
                    : isTrialActive
                    ? `Profitez pleinement de toutes les fonctionnalités Qomand. Votre essai se termine le ${trialEndsAt!.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}.`
                    : "Votre période d'essai est terminée. Passez à un abonnement pour continuer à utiliser Qomand."}
                </p>
              </div>
              <a
                href={isSubscribed || isTrialActive ? APP_ROUTES.dashboard : APP_ROUTES.subscribe}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--primary)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 12,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(232,83,29,0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                {isSubscribed ? "Ouvrir l'app" : isTrialActive ? "Démarrer l'app" : "Choisir un forfait"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        {/* Primary Action - Open App */}
        <a
          href={APP_ROUTES.dashboard}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            background: "linear-gradient(135deg, rgba(232,83,29,0.12) 0%, var(--surface) 50%)",
            border: "1px solid rgba(232,83,29,0.3)",
            borderRadius: 16,
            padding: "32px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 32,
            transition: "all 0.2s ease",
            overflow: "hidden",
          }}
        >
          {/* Subtle glow effect */}
          <div
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              background: "radial-gradient(circle, rgba(232,83,29,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          
          <div style={{ position: "relative", flex: 1 }}>
            <div
              style={{
                width: 52,
                height: 52,
                background: "linear-gradient(135deg, var(--primary) 0%, #c64918 100%)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                boxShadow: "0 4px 12px rgba(232,83,29,0.25)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--foreground)",
                margin: "0 0 6px",
                letterSpacing: "-0.02em",
              }}
            >
              Ouvrir l&apos;application
            </h3>
            <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
              Gérez votre menu, suivez les commandes en temps réel.
            </p>
          </div>
          
          <div
            style={{
              position: "relative",
              background: "var(--primary)",
              color: "white",
              borderRadius: 10,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Accéder
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
          </div>
        </a>

        {/* Secondary Actions Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >

          {/* Menu */}
          <a
            href={APP_ROUTES.menu}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: "var(--surface)", 
              border: "1px solid var(--border)", 
              borderRadius: 12, 
              padding: "20px", 
              textDecoration: "none", 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ width: 36, height: 36, background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", margin: "0 0 3px" }}>Gérer le menu</p>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Ajoutez, modifiez ou supprimez vos plats en temps réel.</p>
            </div>
          </a>

          {/* Orders */}
          <a
            href={APP_ROUTES.orders}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: "var(--surface)", 
              border: "1px solid var(--border)", 
              borderRadius: 12, 
              padding: "20px", 
              textDecoration: "none", 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ width: 36, height: 36, background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", margin: "0 0 3px" }}>Commandes</p>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Suivez les commandes de vos tables en temps réel.</p>
            </div>
          </a>

          {/* Tables */}
          <a
            href={APP_ROUTES.tables}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: "var(--surface)", 
              border: "1px solid var(--border)", 
              borderRadius: 12, 
              padding: "20px", 
              textDecoration: "none", 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ width: 36, height: 36, background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", margin: "0 0 3px" }}>Tables & QR codes</p>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Gérez vos tables et téléchargez vos QR codes.</p>
            </div>
          </a>

          {/* Settings */}
          <a
            href={APP_ROUTES.settings}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: "var(--surface)", 
              border: "1px solid var(--border)", 
              borderRadius: 12, 
              padding: "20px", 
              textDecoration: "none", 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ width: 36, height: 36, background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", margin: "0 0 3px" }}>Paramètres</p>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Horaires, paiements, informations du restaurant.</p>
            </div>
          </a>
        </div>

        {/* Help - Subtle card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--muted)"
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
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  margin: "0 0 2px",
                }}
              >
                Besoin d&apos;aide ?
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Notre équipe est disponible pour vous aider à configurer votre espace.
              </p>
            </div>
          </div>
          <a
            href="mailto:support@qomand.fr"
            style={{
              fontSize: 12,
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Contacter
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
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
                {name}
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
                {isSubscribed
                  ? `Abonné — ${profile?.plan ?? "Pro"}`
                  : isTrialActive
                  ? `Essai gratuit (${daysLeft}j restants)`
                  : "Essai expiré"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
