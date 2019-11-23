import React from 'react';
import DisplayGhibli from './components/DisplayGhibli';
import GetGhibli from './components/GetGhibli';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {

      color: white;
      background: lightblue;
    }

    .App {

      margin: 0 5%;
      
    }

    h1 {

      text-align: center;
      font-weight: bold;
      font-size: 150%;
      padding: 5% 0;
      margin-bottom: 2%;

    }
`;

function App() {



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
