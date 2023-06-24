import React from 'react'
import {Link} from "react-router-dom";
import "./Home.css"
import pvr from '../../assets/pvr.png';

const Home = () => {
  return ( 
    <div style={{backgroundColor:"#BCEDF6",width:"100%",height:"100vh"}}>
<h1>Hi...Welocme Back</h1>
<h3>Click below to get List of Movies in PVR Today</h3>
<img src={pvr} alt="" style={{width:"50%",height:"200px"}} /> 
<br/>
<Link to="/cards">
<button className='btn'> Movies list</button>
</Link>
    </div>
  )
}

export default Home