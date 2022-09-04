import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import axios from '../../Axios'
import './Banner.css'
function Feed() {
    const [movie, setMovie] = useState()
    useEffect((index) => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {

            setMovie(response.data.results[1])
        })
    }, [])

    return (
        < div className="carousel-container">
            <div className="carousel">
                <div className="slider">
                    <div className="slide-content">
                        <h1 className="movie-title">{movie ? movie.title : ""}</h1>
                        <p className="movie-des">{movie ? movie.overview : ""}</p>
                    </div>
                    <img src={movie ? imageUrl + movie.backdrop_path : ""} className='slider' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feed
