import React,{useContext} from 'react'
import Movielist from "../Components/Movie-list";
import Links from '../Components/Links'
import {movie_context} from '../App'
import Navbar from '../Components/Navbar.js'
import '../styles/Movie.css'
export default function Movie() {
  
    return (
      <div>
        <div className='Navlink'>
         
         <Links />
         <Navbar />
        </div >
        <Movielist  />
      </div>
    )
  
 
  
}
