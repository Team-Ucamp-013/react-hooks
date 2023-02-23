import React, { useEffect, useState } from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

function Rick(){
const [info, setInfo] = useState([])

const getData = async() =>{
const url = 'https://rickandmortyapi.com/api/character'
const resp = await axios.get(url)
 console.log(resp.data.results)
 setInfo(resp.data.results)

}

useEffect(() => {
    getData()
},[])

return(
    <div>
        <h1>Hola</h1>
        {info.map((x) =>
      <Card key={x.id} style={{width: '18rem'}}>
        <Card.Img src={x.image}/>
        <Card.Title>{x.name}</Card.Title>
         <Link to={`/info/${x.id}`}>Más información</Link>
      </Card>
        )}
    </div>
)
}

export default Rick