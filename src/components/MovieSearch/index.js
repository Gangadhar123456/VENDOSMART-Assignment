import React, { useState, useEffect } from 'react';
import './index.css';
import MovieItem from '../MovieItem';
import SortByRating from '../SortByRating';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState('release_date');

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(currentPage);
    }
  }, [searchQuery, currentPage, sortBy]);

  const fetchMovies = async (page = 1) => {
    const API_KEY = 'ad7caf07e0473b8e70aa9670fe69e246';
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}&sort_by=${sortBy}`
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies(1);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
    fetchMovies(1);
  };

  return (
    <div>
      <form className='movieSearch-Container' onSubmit={handleSearch}>
        <p className='movie-search-name'>MOVIE NAME</p>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search for a movie...'
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      <SortByRating onSortChange={handleSortChange} />

      <ul className='ul-movisList'>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>

      <div>
        {currentPage > 1 && (
          <button
            className='next-button'
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            className='prev-button'
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
