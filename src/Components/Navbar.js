import React,{useContext} from 'react'
import ReactDOM from 'react-dom';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import {movie_context} from '../App.js'


export default function Navbar(){
     const data=useContext(movie_context);
     const search=data.search
     const setinputvalue=data.setinputvalue
    return(
        
        <div className='Navbar'> 
          <input type='search' placeholder="search-movies" className="search-bar" 
          onChange={
              (e)=>{
                
                  setinputvalue(e.target.value)
                //   console.log(inputvalue)
              }           
            } 
            onKeyDown={
                (e)=>{
                  if(e.keyCode==13){
                      search()
                    //   add another function that will do the loading a Funny() function
                  }
                }
            }/>
          <button className='input_button'
           onClick={search}>Search</button>
          </div>
    

    )
}

// alert("hello")