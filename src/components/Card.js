import React from 'react';

// const Card = ({ country }) => {  // CETTE EXPRESSION EST CORRECT MAIS ON TRAVILLE ICI AVEC PROPS C MIOEUX
const Card = (props) => {
  // AFFICHE 255 OBJETS qui ont country comme attribut
  // console.log(props);

  // AFFICHE 255 OBJETS CORRESPENDATN A CUAQUE country
  // console.log(props.country);


  // DESTRUCTURER L'OBJETS
  const { country } = props;
  // EQUIVALENT À === 
  // const country = props.country;
  console.log(country);// === console.log(props.country);

  // SEPARER LES CHIFFRE DE POPULATION PAR MILLIER
  // UTILISER UNE REGEX
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <li className="card">
      {/* // Version V3.1 */}
      {/* <img src={country.flags.svg} alt="flag" /> */}
      <img src={country.flag} alt="flag" />
      <div className="data-container">
        <ul>
          {/* // Version V3.1 */}
          {/* <li>{country.name.common}</li> */}
          <li>{country.name}</li>
          <li>{country.capital}</li>
          <li>pop. {numberFormat(country.population)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;