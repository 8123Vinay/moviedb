import React,{useContext} from 'react'
import Card from "./Card.js"
import "../styles/Cardlist.css"
// import {movielist} from './'
import {movie_context} from '../App.js'



export default function Cardlist(){
    const movies=useContext(movie_context);
    if(movies.movielist.length){
       let array=movies.movielist.map((i)=>{
            return <Card Poster={i.Poster} Year={i.Year} Title={i.Title} id={i.imdbID} key={i.imdbID}/>
        })
        return(
            <div className="Cardlist">
                {array}
            </div>
        )
        
    }
    else{
        return(
          "Enter a Movie Name to search"
        )
    }
    // return(
    //     <h1>hello world</h1>
    // )
}

    

