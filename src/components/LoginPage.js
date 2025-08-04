import React, { useState } from "react";
import "../Styles/LoginPage.css";
import { auth, provider } from "../firebase"; // adapte le chemin si besoin
import { signInWithPopup } from "firebase/auth";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "youcef" && password === "123") {
      onLogin(true);
    } else {
      alert("Identifiants incorrects !");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Connecté via Google :", user.displayName);
      onLogin(true); // ou passe l'objet user si tu veux l'exploiter
    } catch (error) {
      console.error("Erreur Google Sign-in :", error);
      alert("Échec de la connexion Google");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Connexion à NextStep</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Se connecter
      </button>
      <hr />
      <button onClick={handleGoogleLogin} className="login-button google-button">
        Se connecter avec Google
      </button>
    </div>
  );
}
