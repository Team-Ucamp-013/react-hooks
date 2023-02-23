import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dataghf from "./infoGif";

function Gif(){
    const [info, setInfo] = useState([])
    const [busqueda, setBusqueda] = useState("")

     const getData = async() => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=IZL6Q0oAkN4heZUClfymqMu1OuZF4qYm&q=${busqueda}&limit=13&offset=0&rating=g&lang=en`
    const resp = await axios.get(url)
    setInfo(resp.data.data)
    console.log(resp.data.data)
    }

    useEffect(() =>{
        getData(); 
    },[])

    const handleInput = (e) =>{
        setBusqueda(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit  = () =>{
    getData()
    setBusqueda('')
    }

    return(
        <div>
            <h1>Esto es un Gif</h1>

            <input type="text" onChange={handleInput}/>
            <button onClick={handleSubmit}>Enviar</button>

            <Dataghf info={info}/>
        </div>
    )
}

export default Gif