import { useParams } from 'react-router'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Links from '../Components/Links'


export default function MovieDetails() {
  const [Actors,setActors]=useState('')
  const {id}=useParams();
  const URL=`https://www.omdbapi.com/?apikey=255ab1d4&i=${id}`
  let response;

 async function details(){
   response=await axios.get(URL)
   setActors(response.data.Actors)
 }

 details()
  return (
    <div>
      <Links />
      {Actors}
    </div>
    
  )
}


