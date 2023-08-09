// src/components/MovieItem.js
import React from 'react';
import './index.css'

const MovieItem = ({ movie }) => {
  return (
    <li key={movie.id}>
    <div>
        <img className='movie-image'
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
      />
    </div>
    <div className='second-container'>
      <h2 className="movie-titile">{movie.title}</h2>
      <p className='movie-release-and-rating'>Release Date: {movie.release_date}</p>
      <p className='movie-release-and-rating'>Rating: {movie.vote_average}</p>
      <p className='movie-discription'>{movie.overview}</p>
    </div>
    </li>
  );
};

export default MovieItem;