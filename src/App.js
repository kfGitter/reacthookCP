import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails'; 
import Filter from './Filter';
import './movie.css';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRateChange = (e) => {
    setFilterRate(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  const filteredMovies = movies
    .filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRate
      );
    })
    .sort((a, b) => a.rating - b.rating);

  // routing happens here
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Filter
              filterTitle={filterTitle}
              filterRate={filterRate}
              handleTitleChange={handleTitleChange}
              handleRateChange={handleRateChange}
            />
            <MovieList movies={filteredMovies} />      <form onSubmit={handleAddMovie}>
              <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleInputChange} />
              <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleInputChange} />
              <input type="url" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleInputChange} />
              <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleInputChange} />
              <button type="submit">Add Movie</button>
            </form>
          </Route>
          <Route path="/movie/:id" render={(props) => <MovieDetails {...props} movies={movies} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
