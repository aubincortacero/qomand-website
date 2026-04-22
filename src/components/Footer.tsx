import { REGISTER_URL, LOGIN_URL } from "@/lib/constants";

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Tarifs", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "App",
    links: [
      { label: "Se connecter", href: LOGIN_URL },
      { label: "Créer un compte", href: REGISTER_URL },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      {
        label: "Politique de confidentialité",
        href: "/politique-confidentialite",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-5 pb-10 pt-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Top */}
        <div className="mb-12 grid gap-12 md:grid-cols-[1fr_auto_auto_auto] md:gap-16">
          {/* Brand */}
          <div className="max-w-[280px]">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-blanc.svg" alt="Qomand" className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Menu QR code et commandes en ligne pour les restaurants. Simple,
              rapide, sans application.
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                {col.title}
              </p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted no-underline transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-7">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Qomand. Tous droits réservés.
          </p>
          <p className="text-xs text-muted">Fait avec ❤️ en France</p>
        </div>
      </div>
    </footer>
  );
}
