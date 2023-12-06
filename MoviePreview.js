import React from 'react';
const movieContainerStyles = {
    height: '250px',
    width: '250px',
    margin: '25px auto',
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const MoviePreview = (props) => {
  const {movie, onClickFunction} = props;
  return (
    <button key={movie.title} style={movieContainerStyles} onClick={() => {onClickFunction(movie)}}>
        <p style = {{fontWeight: 'bold'}}>{movie.title}</p>
        <p>Rating: {movie.rating}/10</p>
        <p>Director: {movie.director}</p>
        <p>Released: {movie.releaseYear}</p>
    </button>
  )
}

export default MoviePreview;
