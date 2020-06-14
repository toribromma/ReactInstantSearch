import { InstantSearch } from 'react-instantsearch-dom';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <InstantSearch
      appId="latency"
      apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
      indexName="bestbuy"
      ></InstantSearch>
    </div>
  );
}

export default App;
