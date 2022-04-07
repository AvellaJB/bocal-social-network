/* 
Le login fait appel à une fonction login() et prend en paramètres l'email et le password. 
*/

import React, { useState } from "react";
import { login } from "../lib";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 7;
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="login-main-div">
      <h1 className="login-title">Connecte toi:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-email">
          <label>Email</label>
          <br />
          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="xxx@gmail.com"
          />
        </div>
        <br />
        <div className="form-password">
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="8 caractères min"
          />
        </div>
        <br />
        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}
