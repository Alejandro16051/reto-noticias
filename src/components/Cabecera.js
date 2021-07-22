import React from "react";

export default function Cabecera() {
  return (
    <header className="Cabecera">
      <h1 className="TituloPrincipal">Logo</h1>
      <nav className="NavegacionLogin">
        <button id="ingresar">Ingresar</button>

        <button id="registrarme">Registrarme</button>
      </nav>
    </header>
  );
}
