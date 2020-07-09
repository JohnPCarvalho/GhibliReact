import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png'
import { Card } from './components/Card'
import api from './api/api';
import { typeOf } from 'react-is';

function App() {

  const [movies, setMovies] = useState([]);

  //ficara dentro de useEffect para carregar no momento da renderizacao

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await api.get('/films');
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(movies);
    getMovies();
  }, [])

  /* async function getMovies() {
    try {
      const response = await api.get('/films');
      console.log(response);
      setMovies(response);
      console.log(typeof(movies));
      console.log("Movies: " , movies);
    } catch (error) {
      console.error(error);
    }
  } */
  

  //movies.data.map(movie)

  let renderedMovies = null;

  if (movies == null) {
    renderedMovies = (
      <div>
        <h1>There is no movies :(</h1>
      </div>
    ); 
  } else {
    renderedMovies = (
      <div>
        {movies.map(movie => <Card  title={movie.title} description={movie.description} />)}
      </div>
    )
  }

  return (
    <div className="App">
      {/* <button onClick={getMovies}>Fetch movies</button>  */}
      <img src={logo} alt="studio ghibli logo" title="Studio ghibli logo"/>
      {renderedMovies}
    </div>
  );
}

  


export default App;
