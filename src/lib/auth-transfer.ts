/**
 * Transfère la session vers l'app et redirige l'utilisateur
 */
export async function transferToApp(fallbackUrl: string = "/dashboard") {
  try {
    // Appeler l'API de transfert
    const response = await fetch("/api/auth/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erreur transfert session");
    }

    const { url } = await response.json();

    // Rediriger vers l'app avec le code
    window.location.href = url;
  } catch (error) {
    console.error("Erreur transfert:", error);
    // Fallback : ouvrir l'app sans transfert
    window.open(fallbackUrl, "_blank");
  }
}
