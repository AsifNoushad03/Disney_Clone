import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl } from '../../Constants/Constants'
import axios from '../../Axios'
function Stream(props) {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })

  })

  return (

    <div className="movies-list">
      <h1 className="title">{props.title}</h1>
      <div className="card-container">

        {movies.map((obj) =>

          <div className="card">


            <img src={`${imageUrl + obj.backdrop_path}`} className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">{obj.title}</h2>
              <h6 className="des">{obj.overview}</h6>
              <button className="watchlist-btn">add to watchlist</button>
            </div>
          </div>

        )}





      </div>
    </div>
  )
}

export default Stream
