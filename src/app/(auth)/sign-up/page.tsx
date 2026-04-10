"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUp } from "@/app/actions/auth";
import GoogleButton from "@/components/GoogleButton";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        width: "100%",
        background: pending ? "var(--surface-1)" : "var(--primary)",
        color: pending ? "var(--muted)" : "white",
        border: "none",
        borderRadius: 10,
        padding: "13px 20px",
        fontSize: 15,
        fontWeight: 600,
        cursor: pending ? "not-allowed" : "pointer",
        transition: "background 0.2s, opacity 0.2s",
        marginTop: 8,
      }}
    >
      {pending ? "Création du compte…" : "Créer mon compte gratuit"}
    </button>
  );
}

export default function SignUpPage() {
  const [state, action] = useActionState(signUp, undefined);

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "40px 36px",
      }}
    >
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "var(--foreground)",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
        }}
      >
        Créez votre compte
      </h1>
      <p
        style={{
          fontSize: 14,
          color: "var(--muted)",
          margin: "0 0 28px",
          lineHeight: 1.5,
        }}
      >
        7 jours d&apos;essai gratuit — sans carte bancaire.
      </p>

      <GoogleButton label="Continuer avec Google" />

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          margin: "20px 0",
        }}
      >
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span style={{ fontSize: 12, color: "var(--muted)", whiteSpace: "nowrap" }}>
          ou avec un email
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      {state?.error && (
        <div
          style={{
            background: "rgba(232,83,29,0.1)",
            border: "1px solid rgba(232,83,29,0.3)",
            borderRadius: 8,
            padding: "10px 14px",
            fontSize: 13,
            color: "#ff7a52",
            marginBottom: 20,
          }}
        >
          {state.error}
        </div>
      )}

      <form action={action} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: 6,
            }}
          >
            Nom du restaurant
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Le Petit Bistrot"
            required
            style={{
              width: "100%",
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "11px 14px",
              fontSize: 14,
              color: "var(--foreground)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: 6,
            }}
          >
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="contact@monrestaurant.fr"
            required
            style={{
              width: "100%",
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "11px 14px",
              fontSize: 14,
              color: "var(--foreground)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: 6,
            }}
          >
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Au moins 8 caractères"
            required
            minLength={8}
            style={{
              width: "100%",
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "11px 14px",
              fontSize: 14,
              color: "var(--foreground)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <SubmitButton />
      </form>

      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          color: "var(--muted)",
          marginTop: 24,
          marginBottom: 0,
        }}
      >
        Déjà un compte ?{" "}
        <a
          href="/sign-in"
          style={{
            color: "var(--primary)",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Se connecter
        </a>
      </p>
    </div>
  );
}
