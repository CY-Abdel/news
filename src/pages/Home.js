// pas besoin de faire import 
// import React from 'react';

import Countries from "../components/Countries";
import Logo from "../components/logo";
import Navigation from "../components/Navigation";

// 1 COMPOSANT  HOME QUI SES COMPORTE COMME UNE FUNCTION (COMPOSANT == FUNCTION DANS REACT)
const Home = () => {
  //  IL RETOUTNE DU JSX ON L'ECRIT COMME HTML
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
      {/* <h1>Accueil</h1> */}
    </div>
  )
}

// IL SERA UTILISER PARTOUT AVC EXPORT
export default Home;