import React, { useMemo } from "react";

function pasarMultiplicacion(a,b){
    return a*b
}

function Multiplicacion(){
    const change= true;
    const memorizarMulti = useMemo(()=> pasarMultiplicacion(2,5),[change])
    return(
        <h1>{memorizarMulti}</h1>
    )
}

export default Multiplicacion