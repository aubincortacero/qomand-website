import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { APP_URL } from "@/lib/constants";

/**
 * Génère un code de transfert pour connecter l'utilisateur sur l'app
 * POST /api/auth/transfer
 */
export async function POST() {
  try {
    const supabase = await createClient();

    // Vérifier que l'utilisateur est connecté
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    // Récupérer la session (avec refresh token)
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session?.refresh_token) {
      return NextResponse.json(
        { error: "Session invalide" },
        { status: 401 }
      );
    }

    // Générer un code aléatoire sécurisé
    const code = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Stocker le code en DB (expire dans 60 secondes)
    const expiresAt = new Date(Date.now() + 60 * 1000).toISOString();

    const { error: insertError } = await supabase
      .from("auth_transfer_codes")
      .insert({
        code,
        user_id: user.id,
        refresh_token: session.refresh_token,
        expires_at: expiresAt,
      });

    if (insertError) {
      console.error("Erreur insertion code:", insertError);
      return NextResponse.json(
        { error: "Erreur serveur" },
        { status: 500 }
      );
    }

    // Retourner l'URL de redirection
    const transferUrl = `${APP_URL}/auth/continue?code=${code}`;

    return NextResponse.json({ url: transferUrl });
  } catch (error) {
    console.error("Erreur transfert session:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
