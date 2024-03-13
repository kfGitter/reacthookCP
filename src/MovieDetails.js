import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ match }) => {
    const { id } = match.params;
    // Assuming movies array is available here
    const movie = movie.find(movie => movie.id === parseInt(id));

    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <iframe width="560" height="315" src={movie.trailerLink} title={movie.title} frameborder="0" allowfullscreen></iframe>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default MovieDetails;