import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovie = (props) => {
        var [movie,setmovies] = useState(props.data)
         
        const handleChange   =(e)=>{
            const { name, value }=e.target
            setmovies({ ...movie, [name]: value })
            console.log(movie)
          
        }
        const saveData =()=>{
            console.log("Button Clicked")
            console.log(movie);
            if (props.method === "post"){

            axios.post("http://localhost:3005/movies/",movie)
            .then(response=>{
              console.log(response.data) 
                alert("Successfully added")
            })
            .catch(error=> {
               alert("Failed")
            })}
           else if (props.method === "put") {
            axios.put("http://localhost:3005/movies"+movie.name,movie)
            .then((response) => {
              console.log("put data" + response.data)
              alert("success")
              window.location.reload(false);
            })
            .catch((err)=> {
              console.log(err)
            })}
        }
      
  return (
    <div>
      <Typography>New Movies</Typography><br></br>
      <TextField label="Movie Name" variant="outlined" name='movie name' value={movie.moviename} onChange={handleChange}/><br></br>
      <br></br>
      <TextField label="Director" variant="outlined" name='director' value={movie.director} onChange={handleChange}/><br></br>
      <br></br>
      <TextField label="Language" variant="outlined" name='language' value={movie.language} onChange={handleChange}/><br></br>
      <br></br>
      <TextField label="Genre" variant="outlined" name='genre' value={movie.genre} onChange={handleChange}/><br></br>
      <br></br>
      <TextField label="Release Year" variant="outlined" name='release year' value={movie.releaseyear} onChange={handleChange}/><br></br>
      <br></br>
      <Button variant="contained" onClick={saveData}>Sumbit</Button>
      
    </div>
  )
}

export default Addmovie
