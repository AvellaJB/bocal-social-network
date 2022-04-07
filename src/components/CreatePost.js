/* Ils s'agit pour ce composants de créer un poste pour l'utilisateur actuellement
connecté.
Pour cela il faudra faire appel à la fonction createPost() qui prend en paramètre
title et content.
Create post est donc un formulaire qui envoie les données dans la fonction createPost().
*/

import React from "react";
import { useState } from "react";
import { createPost } from "../lib";
function CreatePost() {
  /* useState récupère les données du formulaire, le titre et le post. */

  const [contentInput, setContentInput] = useState("");
  const [titleInput, setTitleInput] = useState("");

  /* Fonction qui doit prendre en paramètre les données du useState
  pour pouvoir les envoyer à la fonction createPost() */

  const sendPostToApi = (e) => {
    e.preventDefault();
    createPost(titleInput, contentInput);
  };

  return (
    /* Mise en place d'un form avec activation de la fonction onSubmit */
    <div>
      <form onSubmit={sendPostToApi}>
        <input
          placeholder="Titre de votre post"
          type="text"
          name="titlePost"
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          placeholder="Contenu"
          type="text"
          name="contentPost"
          onChange={(e) => setContentInput(e.target.value)}
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
}

export default CreatePost;
