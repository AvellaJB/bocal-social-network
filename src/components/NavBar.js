/* 

On a accès à la fonction isUserLoggedIn() qui nous permet de savoir si l'user
et logedin. Nous devons implémenter une logique qui nous permettra de le rediriger
de suite vers la page Login si il n'est pas loggedIN et sinon il a bien le droite
de consulter les autres pages.

On a accès à la fonction logout() qui permet de se deconnecter. à voir si il faut créer
un composant ou juste implémenter la logique dans la nav bar. 

*/

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profil"}>Profil</Link>
        <Link to={"/"}>Home</Link>
      </ul>
    </div>
  );
}

export default NavBar;
