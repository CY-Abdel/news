import React, { useState, useEffect } from 'react';

// "npm i -s axios"
import axios from 'axios';
import Card from './Card';

// const Countries = () => {
//   // HOOKS pr stockage
//   const [data, setData] = useState("example de data hooks");

//   const sayGoodbye = () => {
//     setData("Goodbye");
//   };

//   return (
//     <div className="countries">
//       <h1>Countries : {data}</h1>
//       <button onClick={sayGoodbye}>Dire au revoir</button>
//     </div>
//   );
// };


const Countries = () => {
  // HOOKS pr stockage
  const [data, setData] = useState([]);

  // ON CREE UNE VAR POUR TRIER DU PLUS PEUPLe AU MOINS PEUPLE

  // on install on ligne de commande " npm i-s axios" pour ne pas faire de fetch comme js classique

  const [sortedData, setSortedData] = useState([]);

  //lancer axios une seul fois dans l'API
  const [playOnce, setPlayOnce] = useState([true]);

  // redre dynamique le nmre de pays a afficher
  // rangeValue =  25 au depart.
  const [rangeValue, setRangeValue] = useState([25]);

  const [selectRadio, setSelectRadio] = useState('');
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  // mettre axios dans useEffect pour eviter les 10000 requet Network qui ralentisse le process
  useEffect(() => {
    if (playOnce) {
      axios
        // version V3.1
        // .get(
        //   'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags'
        // )

        // version V2
        .get(
          'https://restcountries.com/v2/all?fields=name,population,region,flag,capital'
        )
        // .then((res) => console.log(res.data))
        // .then((res) => console.log(res))

        // ON INJECT LE RESULTAT DANS LE SETDATA
        .then((res) => {
          setData(res.data);
          setPlayOnce(false);
        });
    }

    console.log(data); //   rien n'EST AFFICHER A LA CONSOLE MAIS LE HOOKS : STATE DE COMPONENT DANS LA BARRE DE CONSOLE IL Y A TOUT LES PAYS.

    //************* Sorted countries ********* */
    const sortedCountry = () => {
      // ON TRANSFOME LA ARRAY ON OBJET
      // pour APPLIQUER LA METHODE SORT SINON 9A MARCHE PAS
      const countryObj = Object.keys(data).map((i) => data[i]);

      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population
      });
      // console.log(sortedArray);

      // pour ne pas surchager la page au depart
      // on affihce 30 objets(pays)
      // sortedArray.length = 30;

      // on doit rendre le nombre de pays a afficher dynamique
      sortedArray.length = rangeValue; // ici rangeValue = 25
      setSortedData(sortedArray);


    }
    sortedCountry();
    // si data ou range value change on relance useEffect
  }, [data, rangeValue, playOnce]);

  // Si data change on relance useEffect
  // }, [data, playOnce]);

  // }, []); // AJOUTE [] POUR QUE USEEFFECT SE JOUE UNE SEULE FOIS SEULEMENT SINON ON AURA 10000 REQUETE ET PLUS ENCORE
  // par ex si on met [data] alors le useEffect va etre lu et rejouer chaque fois que la data a été mise a jour.
  // dans notre cas [] sont vide donc la boucles est FINI il sera lu et jouer une seule fois kan

  return (
    // <div>cc</div>
    <div className="countries">
      {/* ajouter le range input */}
      <div className="sort-container">
        {/* // RECUPERER LES VALEURS QUAND IL ON CHANGE LE RANGE COMME ADDeVENTSLISTENER ICI ON UTILISE onChange */}
        {/* e.target.value == la valeur de l'input range */}
        {/* quand on change la valeur de rangeValue useEffect va etre ralacer */}
        <input
          type="range"
          min="2"
          max={data.length}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        {/* radio choix par continents */}
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio" id={radio}
                  value={radio}
                  checked={radio === selectRadio} onChange={(e) => setSelectRadio(e.target.value)} />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>
      {/*  BUTTON POUR ANNULER LA RADIO DE CONTINENT */}
      <div className="cancel">
          {/* LE H5 DOIT ETRE AFFICHER UNIQUEMENT QUAND ON CLIQUE SUR UN RADIO */}
          {selectRadio && (
            <h5 onClick={() => setSelectRadio("")}>Anuller la recherche</h5>
          )}
      </div>

      <ul className="countries-list">
        {sortedData
          // filtrer par continent avant de map
          .filter((country) => country.region.includes(selectRadio))

          // Dans la console component il y a deux states Hooks on doit appliquer le 2eme qui est sorted pas nombrer de population 
          .map((country) => (

          // {data.map((country) => (
          // AU LIEU DE CREER 254 CARD POUR CHAQUE PAYS ON VA CREER UNE SEULE
          // ON VA PASSER A CAR LES  " PROPS "

          // Version V3.1
          // <Card country={country} key={country.name.common} /> // sinon lors de l'execution une erreur : "'country' is not defined  no-undef" 

          // version V2
          <Card country={country} key={country.name} /> // sinon lors de l'execution une erreur : "'country' is not defined  no-undef" 
        ))}
      </ul>
    </div>
  );
};
export default Countries;