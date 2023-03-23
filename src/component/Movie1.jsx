import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addmovie from './Addmovie'

const Movie1 = () => {
  var [update,setupdate]=useState(false)
  var [singlevalue,setsinglevalue]=useState([])
  var [movie, setmovie] = useState([])
  useEffect(() => {
      axios.get(" http://localhost:3005")
          .then(response => {
              console.log(response.data)
              setmovie(movie=response.data)
          })
          .catch(err => console.log(err))
  })
  const updatevalue=(value)=>{
      setsinglevalue(value);
      setupdate(true);
  }
  const deletemovie=(id)=>{
      console.log("delete clicked" +movie);
      axios.delete("http://localhost:3005/" )
      .then(response=>{
          alert("deleted")
          window.location.reload(false)
      })
      
  }
  var finaljsx= <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Moviename</TableCell>
                          <TableCell>Director</TableCell>
                          <TableCell>Language</TableCell>
                          <TableCell>Genere</TableCell>
                          <TableCell>Release year</TableCell>
                          <TableCell>Delete movie</TableCell>
                          <TableCell>Update movie</TableCell>
                          <TableCell></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {movie.map((value,index)=>{
                          return<TableRow>
                              <TableCell>{value.moviename}</TableCell>
                              <TableCell>{value.director}</TableCell>
                              <TableCell>{value.language}</TableCell>
                              <TableCell>{value.genere}</TableCell>
                              <TableCell>{value.releaseyear}</TableCell>
                              <TableCell>{value.delete}</TableCell> 
                              <TableCell>{value.update}</TableCell>  
                          
                              <TableCell >
                                  <Button onClick={()=>deletemovie(value.moviename)}>delete</Button>
                                  </TableCell>
                              <TableCell >
                                  <Button onClick={()=>updatevalue(value)}>update</Button>
                                  </TableCell>
                          </TableRow>
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
          if(update)
          finaljsx=<Addmovie data={singlevalue} method="put"></Addmovie>
          return(
          <div>
              <br></br>
              <br></br>
              <br></br>
              {finaljsx}
      </div>
  )
}

export default Movie1
