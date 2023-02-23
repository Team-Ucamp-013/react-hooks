import React, { useEffect, useState } from "react";

export default function Example(){
    const [contar, setContar] = useState(0);
 
    useEffect(() => {
     setContar(contar + 1)
    },[])


    return(
        <div>
            <p> Clickeame {contar} tantas veces</p>
             {/* <button onClick={()=> setContar(contar +1)}> Click</button> */}
        </div>
    )
}