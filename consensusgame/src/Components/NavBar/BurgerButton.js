import React from "react";

import "./NavBar.scss";

const BurgerButton = props => (
  <a className="burger" onClick={props.click}>
    &#9776;
  </a>
);

export default BurgerButton;
