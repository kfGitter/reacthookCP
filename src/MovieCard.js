import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>

                <img src={movie.posterURL} alt={movie.title} />
                </Link>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieCard;