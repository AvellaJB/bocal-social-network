/* getCurrentUserProfile() permet de récupérer les infos à alimenter dans la page
profil.

getUserProfile() permet de récupérer les données d'un user selon le paraètre userId. 
On peux utiliser la page profil pour display les données dans un formulaire si c'est 
les données de l'utilisateur connecté. 
SI c'est les données d'un autre utilisateurs, c'est simplemetn display en text.

Si c'est le current profil qui est display, lorsqu'il update ses données (dans le formulaire), 
cela fait appel à la fonction updateCurrentUserProfile(). 
qui prend en paramètre firstname, name, mail, age, occupation. 

*/

import React from "react";

function Profil() {
  return <div>Profil</div>;
}

export default Profil;
