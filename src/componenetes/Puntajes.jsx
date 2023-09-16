import React from "react";

function Puntajes() {
    return (
        <div className="puntaje todo">
        <p className="nombre nombre-jugador todo">Usuario</p>
        <p className="nombre nombre-computadora todo">PC</p>
        <p className="puntos todo">
            <span id="puntos-usuario">0</span>
            <span>-</span>
            <span id="puntos-computadora">0</span>
        </p>
    </div>
    )
}

export default Puntajes;