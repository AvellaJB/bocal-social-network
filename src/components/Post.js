/* 

Notre post aura un titre, un auteur, la possibilité d'ajouter des commentaire, des likes. 
une date de création. 

On fera appel à la fonction addComment() qui prend en paramètre un postID et un content.
Il faudra faire attention à ce que notre commentaire ne s'ajoute que sur le post commenté.

On fera appel à la fonction addLike() qui prend en paramètre un post ID. Elle sera 
probablement déclenchée lors d'un click d'un boutton like. 
*/

import React from "react";
import { getPosts } from "../lib";
import { useState, useEffect } from "react";

function Post() {
  const [posts, setPosts] = useState([]);

  const allPosts = async () => {
    let resultGetPosts = await getPosts();
    setPosts(resultGetPosts.posts);
  };

  useEffect(() => {
    allPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
