"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

function getDisplayName(user: User): string {
  return (
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    user.email?.split("@")[0] ||
    "Compte"
  );
}

function getInitial(user: User): string {
  return getDisplayName(user).charAt(0).toUpperCase();
}

const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <>
      <header className="glass sticky top-0 z-50 border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
          {/* Logo */}
          <a href="/" className="flex items-center no-underline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-blanc.svg"
              alt="Qomand"
              style={{ height: '35px', width: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-muted no-underline transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {user ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-transparent px-2 py-1.5 transition-colors hover:bg-white/5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {getInitial(user)}
                  </div>
                  <span className="hidden text-sm font-medium text-foreground md:inline">
                    {getDisplayName(user)}
                  </span>
                  <svg
                    className="hidden text-muted md:block"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "transform 0.2s",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {open && (
                  <div className="absolute right-0 top-[calc(100%+8px)] z-50 flex w-[272px] flex-col gap-3 rounded-2xl border border-border bg-surface-1 p-4 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                        {getInitial(user)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {getDisplayName(user)}
                        </p>
                        <p className="truncate text-xs text-muted">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://app.qomand.fr/dashboard"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl bg-primary px-3.5 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-primary-hover"
                    >
                      Accéder à l&apos;app
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <div className="border-t border-border" />
                    <button
                      onClick={handleSignOut}
                      className="flex cursor-pointer items-center gap-2 border-none bg-transparent px-0 py-1 text-sm font-medium text-red-400 hover:text-red-300"
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a
                  href="/sign-in"
                  className="hidden text-sm font-medium text-muted no-underline transition-colors hover:text-foreground md:inline"
                >
                  Connexion
                </a>
                <a
                  href="/sign-up"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white no-underline transition-all hover:bg-primary-hover hover:-translate-y-px"
                >
                  Essai gratuit
                </a>
              </>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-transparent md:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-16 h-[calc(100vh-64px)] w-72 border-l border-border bg-surface-1 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted no-underline transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
              {!user && (
                <>
                  <div className="border-t border-border" />
                  <a
                    href="/sign-in"
                    className="text-base font-medium text-muted no-underline transition-colors hover:text-foreground"
                  >
                    Connexion
                  </a>
                  <a
                    href="/sign-up"
                    className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white no-underline transition-all hover:bg-primary-hover"
                  >
                    Essai gratuit
                  </a>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
