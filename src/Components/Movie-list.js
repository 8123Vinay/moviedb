import React,{useContext} from 'react'
import '../styles/Movie-list.css'
import Cardlist from './Cardlist'
import Footer from './Footer.js'
import {movie_context} from '../App.js'
export default function Movielist(){
   const movies=useContext(movie_context);
   const movielist=movies.movielist;
   const page=movies.page
  //  console.log(page)


   if(movielist===undefined){
     return(
       <div>
         <h1>The page requested is not available</h1>
         <Footer />
       </div>
     )
   }

   else if(movielist.length==0){
    return(
      <div>
          <h2 className="header">Movie Databse</h2>
         <Cardlist />
    </div>
  )

}
else{
  return(
    <div>
          <h2 className="header">Movie Databse</h2>
    <Cardlist />
    <Footer />
    </div>
  ) }
}

  
   
