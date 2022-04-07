/* 
Ici nous aurons la fonction getPosts(page, limit) qui permet de récupérer
un nombre donné de posts de tous les utilisateurs 
Les données seront à envoyé dans le components Post pour qu'ils soient mis en forme.
Les données seront envoyées via des Props. 
*/

import React from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { getPosts } from "../lib";

function Home() {
  return (
    <div>
      <CreatePost />
      <Post />
    </div>
  );
}

export default Home;
