import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Info = () =>{

    const { id } = useParams()

    const [personaje,setPersonaje] = useState({})

    const getPersonaje = async() =>{
        let url= `https://rickandmortyapi.com/api/character/${id}`
        const { data } = await axios.get(url)
        setPersonaje(data)
        console.log(data)
    }
    
    useEffect(()=>{
        getPersonaje(); 
    },[])

    return(
        <>
        <h1>{personaje.name}</h1>
        <h1>{personaje.status}</h1>
        <h1>{personaje.species}</h1>
        <h1>{personaje.gender}</h1>
        <img src={personaje.image}/>
       
        </>
    )
}
export default Info