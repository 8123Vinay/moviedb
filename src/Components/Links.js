import React from 'react'
import {Link} from 'react-router-dom'

export default function Links() {
  return (
    <div className="link">
    <Link to={`/`}>
         <p className="links">Home</p> 
      </Link>
      <Link to={`/movie`}>
        <p className="links">Movie</p> 
      </Link>
      <Link to={`/about`}>
         <p className="links">About</p> 
      </Link>
  </div>
  )
}
