import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addmovie from './Addmovie'

const Names = () => {
  var [update,setUpdate]=useState(false)
  var [singleValues,setSingleValue]=useState([])
  var [movie,setmovies] = useState([])
  useEffect(()=> {
      axios.get("http://localhost:3005/movies")
      .then(respose=> {
          console.log(respose.data)
          setmovies(movie=respose.data)
  })
      .catch(err=>console.log(err))
},[])
      const updatemovies = (value) =>{
        setSingleValue(value);
        setUpdate(true);
      }
  const deletemovies =(id) => {
    console.log("delete clicked" +id);
    axios.delete("http://localhost:3005/movies/"+id)
    .then(response=> {
      alert("deleted")
      window.location.reload(false)
    })
  }
    var finalJSX =<TableContainer>
      <Table>
          <TableHead>
              <TableRow>
              <TableCell>Movie Name</TableCell>
                  <TableCell>Director</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Genre</TableCell>
                  <TableCell>Release Year</TableCell>
              </TableRow>
              </TableHead>
      <TableBody>
          {movie.map((value,index)=> {
              return<TableRow>
                <TableCell>{value.moviename}</TableCell>
                  <TableCell>{value.director}</TableCell>
                  <TableCell>{value.language}</TableCell>
                  <TableCell>{value.genre}</TableCell>
                  <TableCell>{value.releaseyear}</TableCell>
                  <TableCell>
                    <Button onClick={()=>deletemovies(value.id)}>Delete </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>updatemovies(value)}>Update </Button>
                  </TableCell>
              </TableRow>
          })}
          
      </TableBody>
      </Table>
    </TableContainer>
    if (update)
    finalJSX =<Addmovie data ={singleValues} method="put"/>
  return (
    <div>
        {finalJSX}
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default Names
