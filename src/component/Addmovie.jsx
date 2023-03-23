import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovie = (props) => {
    var[movie,setmoviename]=useState(props.data)
       console.log("add page props"+props.data)
      
    
    const handleChange=(e)=>{
        const{director,value}=e.target
        setmoviename({...movie,[director]:value})
        console.log(movie)
    }
    const inputhandle=()=>{
console.log("button clicked")
console.log(movie);
if(props.method ==="post")
axios.post(" http://localhost:3005",movie)
.then(response=>{
    alert("successfully added")
})
.catch(error=>{
    console.log("failed")
})
if(props.method ==="put")
axios.put(" http://localhost:3005/"+movie.moviename,movie)
.then((response)=>{
    console.log("putdata"+response.data)
    alert("success")
    window.location.reload(false);
})
.catch((error)=>{
    console.log(error)
})
else if(props.method === "put")
axios.put(" http://localhost:3005/movie/"+movie.moviename,movie)
.then((response)=>{
    console.log("putdata"+response.data)
    alert("success")
    window.location.reload(false);
})
.catch((error)=>{
    console.log(error)
})
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    
  return (
    <div>
        <Typography>Addmovie </Typography>
        <br></br>
      <TextField  variant='outlined' label='moviename' name='moviename' value={movie.moviename} 
      onChange={handleChange}></TextField><br></br><br></br>
      <TextField  variant='outlined' label='director' name='director' value={movie.director} 
      onChange={handleChange}></TextField><br></br><br></br>
      <TextField  variant='outlined' label='language' name='language' value={movie.language} 
      onChange={handleChange}></TextField> <br></br><br></br>
      <TextField  variant='outlined' label='genere' name='genere' value={movie.genere} 
      onChange={handleChange}></TextField> <br></br><br></br>
      <TextField  variant='outlined' label='releaseyear' name='releaseyear' value={movie.releaseyear} 
      onChange={handleChange}></TextField> <br></br><br></br>
  <Button variant='contained' onClick={inputhandle}>Submit</Button>

    </div>
  )
}


export default Addmovie
