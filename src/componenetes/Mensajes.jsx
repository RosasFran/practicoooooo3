import React from "react";

function Mensajes() {
    return (
        <div className="mensaje disabled" id="mensaje">
        <p>
            Usaste <span className="eleccion" id="eleccion-usuario">papel✋</span>
            La PC usó <span className="eleccion" id="eleccion-computadora">piedra✊</span>
        </p>
        <p id="gano-punto">¡¡Ganaste un punto!!😎</p>
    </div>
    )
}

export default Mensajes;