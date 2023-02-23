import React from "react";
import Multiplicacion from "./Hook/useMemo";
import Reduc from "./Hook/useReducer";

function Estados(){
    return(
        <>
        <h1>Esto es la pagina de estados</h1>
        <Multiplicacion />
        <Reduc />
        </>
    )
}

export default Estados