import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Requests'


const Main = () => {
const [movies, SetMovies] = useState([])

useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
        SetMovies(response.data.results);
    })
},[]);

console.log(movies)
  return (
    <div>
      
    </div>
  )
}

export default Main
