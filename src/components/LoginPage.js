// src/components/LoginPage.js
import React, { useState } from "react";
import "../Styles/LoginPage.css";

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
    </div>
  );
}
