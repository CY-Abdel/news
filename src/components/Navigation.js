import React from 'react';

// LE COMPONENT QUI PERMET D'ALLER DE PAGE EN PAGE
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">

      <NavLink to="/" activeclassname="nav-active">
        Acceuil
      </NavLink>

      <NavLink to="/news" activeclassname="nav-active">
        News
      </NavLink>
      
      <NavLink to="/a-propos" activeclassname="nav-active">
        À propos
      </NavLink>

      {/* <NavLink exact='true' to="/" activeclassname="nav-active">
        Acceuil
      </NavLink>
      <NavLink exact='true' to="/a-propos" activeclassname="nav-active">
        À propos
      </NavLink> */}
    </div>
  );
};

export default Navigation;