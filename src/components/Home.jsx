import React from "react";
import { Outlet } from "react-router-dom";
import Example from "./Hooks/useState";
import { Link } from "react-router-dom";
import '../App.css'
import { items } from "../data/datos";

export default function Home(){
    return(
        <div>
            <nav>
                <Link to={'/rick'}>Rick</Link>
                <Link to={'/gifs'}>Gifs</Link>
                <Link to={'/estados'}>Estados</Link>
            </nav>
            <h1>Hola mundo</h1>
{/*           <a href="contacts/1"><h1>Presiona aquí</h1></a> */}

          
          <Example />
         
         {items.map(item => 
            <div>
                <Link to={`contacts/${item.id}`}>{item.nombre}</Link>
            </div>
            )}

         <div>
            <Outlet />
         </div>
        </div>
    )
}