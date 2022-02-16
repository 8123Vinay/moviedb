import './App.css';
import React,{createContext} from 'react'
import  { Navbar,Footer,Links } from './Components'
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home.js"
import Movie from "./Pages/Movie.js"
import About from "./Pages/About.js"
import MovieDetails from './Pages/MovieDetails'
export const movie_context=createContext()

const URL=`https://www.omdbapi.com/?s=`
const apikey='255ab1d4'

function App() {
   const  [inputvalue,setinputvalue]=useState('')
   const [movielist,setmovielist]=useState([])
   const [page,setpage]=useState(1)
   let response;
  
async function search(page){
    console.log('loading')
     response=await axios.get(
     URL+inputvalue+`&apikey=${apikey}&page=${page}`
   )
   console.log(response);
   setmovielist(response.data.Search)
 
}




 

  return (
    <div className="Movie-db">
    <movie_context.Provider value={{movielist:movielist,page:page ,search:search,setpage:setpage,inputvalue:inputvalue,setinputvalue:setinputvalue}}>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/movie" element={<Movie />}/>
         <Route path="/movie-details/:id" element={<MovieDetails />}/>
       </Routes>
      </BrowserRouter>
    </movie_context.Provider>
    </div>
  )
}
  


export default App


