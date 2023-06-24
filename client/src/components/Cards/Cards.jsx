import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Card from '../Card/Card';
import "./cards.css";
const Cards = () => {
  const [movies,setMovies]=useState([]);
  
  useEffect(()=>{
    axios
    .get("http://localhost:8000/movie")
    .then((res)=>setMovies(res.data))
 
    .catch((error)=>console.log(error))
  },[])


  return (
    <div className='main'>
<div className='text'>
  <h2>Movies List</h2></div>
{/* {console.log("movies",movies)} */}
{

movies.map((movie)=>{
  return(
    <div>
      


     <Card movies={movie}/>
    </div>
  )
})


}


    </div>
  )
}

export default Cards