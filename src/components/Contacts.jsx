import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/datos";

export default function Contact(){
    const params = useParams();
   const contactos = useMemo(()=> getContact(params.contactid),[params.contactid])

   if(!contactos){
    throw new Error("El contacto no se encuentra en la base")
   }

    return (
        <div>
        {/* <h1>Este va a ser un hijo</h1> */}
        <h1>{contactos.nombre}</h1>
        <h1>{contactos.telefono}</h1>
        </div>
    )
}