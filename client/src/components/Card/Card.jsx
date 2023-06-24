import React from 'react';
import "./Card.css";
import pvr from '../../assets/pvr.png';

const Card = ({movies}) => {
    // console.log("movies from cards",movies)
  return (
    <div className='container'>
       <div className='card'>
        <div className='carddetails'>
          <img src={pvr} alt="image" className='img' />
        <h2 style={{color:"#EDEDF4"}}>{movies.name}</h2>
        <h2>{movies.rating}</h2>
        <h2>{movies.released_date}</h2>
        </div>
       </div>




    </div>
  )
}

export default Card