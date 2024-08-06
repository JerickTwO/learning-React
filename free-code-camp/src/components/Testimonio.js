import React from "react";
import '../css/Testimonio.css'



function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        alt={`Foto de ${props.nombre}`}
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      />
      <div className="contenedor-texto-testimonio">
				<header className="contenedor-texto-testimonio-head">
        	<p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        	<p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
				</header>
        <p className="texto-testimonio">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}
export default Testimonio;
