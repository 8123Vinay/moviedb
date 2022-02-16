import React,{useContext} from 'react'
import '../styles/Card.css'
import {Link} from 'react-router-dom'




export default function Card({Poster, Title,Year ,id}){
  
    // const URL=`https://www.omdbapi.com/?apiid='255ab1d4'&i=${id}`
   return(
       <Link to={`/movie-details/${id}`}>
        <div className="Card">
         <img src ={Poster} className='image' />
         <div className='text'>
          <p className="Title">{Title} </p>
          <p className="Year">Year:{Year}</p>
        </div>
       </div>
     </Link>
   )
}
