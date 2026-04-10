"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

function truncateName(user: User): string {
  const name =
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    user.email?.split("@")[0] ||
    "Compte";
  return name.length > 12 ? name.slice(0, 11) + "…" : name;
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header
      style={{
        background: "rgba(10,10,10,0.85)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "var(--primary)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="18"
              height="18"
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
              fontSize: 20,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            Qomand
          </span>
        </div>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden-mobile"
        >
          {[
            { label: "Fonctionnalités", href: "#features" },
            { label: "Comment ça marche", href: "#how-it-works" },
            { label: "Tarifs", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {user ? (
            /* Connecté */
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--muted)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span>{truncateName(user)}</span>
              </div>
              <a
                href="/dashboard"
                style={{
                  background: "var(--primary)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "9px 18px",
                  borderRadius: 8,
                  transition: "background 0.2s, opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.background =
                    "var(--primary-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.background =
                    "var(--primary)")
                }
              >
                Accéder à l&apos;app →
              </a>
            </div>
          ) : (
            /* Non connecté */
            <>
              <a
                href="/sign-in"
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Connexion
              </a>
              <a
                href="/sign-up"
                style={{
                  background: "var(--primary)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "9px 18px",
                  borderRadius: 8,
                  transition: "background 0.2s, opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.background =
                    "var(--primary-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.background =
                    "var(--primary)")
                }
              >
                Essai gratuit
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
