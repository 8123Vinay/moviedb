import React,{useContext} from 'react'
import "../styles/Footer.css"
import {movie_context} from '../App.js'
export default function Footer(){
  const data=useContext(movie_context)
  const page=data.page
  const search=data.search
  const setpage=data.setpage
  const movielist=data.movielist


  if(movielist===undefined){
    return(
    <div className='footer'>
    {/* <h1>Hello</h1> */}
    <div className='footer_buttons'>
    <button className='footer_next'  >
    Next</button>
    <h3>{page}</h3>
    <button className='footer_prev'
    onClick={function(){
     
     console.log(page, "page after")
    setpage(page-1)
    search(page-1)
     
   }}>Prev</button>
    </div>
    
 </div>
 )
}

  if(movielist.length>0){
    return(
      <div className='footer'>
          <div className='footer_buttons'>
          <button className='footer_next'
          onClick={function(){
           console.log(page, "page after")
             setpage(page+1)
              search(page+1)
              
            }}>Next</button>
            <h3>{page}</h3>
          <button className='footer_prev'
          onClick={function(){
           
           console.log(page, "page after")
           if(page>1){
            setpage(page-1)
             search(page-1)
             

           }
           else{
             alert("The requested page is not available")
           }
           
         }}>Prev</button>
          </div>
         
      </div>
  )
  }
// return(
//   <div className='footer'>
//   {/* <h2>Hello </h2>
//   <h2>Hello2 </h2> */}
//   <button>
//     CLick heer
//   </button>
//   <button>
//     Click 2;
//   </button>

//   </div>
// )

  
}
   


   