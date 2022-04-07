/* 
C'est un formulaire qui prend en données du texte et envoie les données en
en paramètre de la fonction Register. 
Dans la lib il y a une fonction qui s'appelle Register(name, email, lastname, password) 
elle prend en paramètre name, lastname, email et password

*/

import React, { useState } from "react";
import { register } from "../lib";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendUserToApi = (e) => {
    e.preventDefault();
    register(firstname, lastname, email, password);
  };

  return (
    <div>
      <form onSubmit={sendUserToApi}>
        <input
          placeholder="Nom"
          type="text"
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          placeholder="Prenom"
          type="text"
          name="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="mot de passe"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default Register;
