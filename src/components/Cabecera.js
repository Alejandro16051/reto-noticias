import React, { useState } from "react";
import Hamburger from "hamburger-react";

export default function Cabecera() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="Cabecera">
      <h1 className="TituloPrincipal">Logo</h1>
      <nav className={click ? "NavegacionLoginActiva" : "NavegacionLogin"}>
        <button id="ingresar">Ingresar</button>
        <button id="registrarme">Registrarme</button>
      </nav>
      <div className="HamburgerDiv" onClick={handleClick}>
        <Hamburger id="Hamburger"></Hamburger>
      </div>
    </header>
  );
}
