import React, { useEffect } from 'react';
import DisplayGhibli from './components/DisplayGhibli';
import GetGhibli from './components/GetGhibli'
import Axios from 'axios';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    .App {

      margin: 0 5%;
    }

    h1 {

      text-align: center;
    }
`;

function App() {

  useEffect (() => {

    const getMovies = () => {
      Axios.get('https://ghibliapi.herokuapp.com/films')
      .then( response => {
        console.log(response);
      })
      .catch( error => {
        console.log(error);
      })
    };

    getMovies();

  }, []);

  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      <header>
        <h1>Studio Ghibli Redux API Example</h1>
        <GetGhibli />
        <DisplayGhibli />
      </header>
    </div>
  );
}

export default App;
