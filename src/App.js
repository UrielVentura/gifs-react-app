 import React,{useState} from 'react';
import './App.css';
import SearchResults from './pages/SearchResults/index';
import { Link, Route } from "wouter";
import Home from './pages/home';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        
        <Route
          component={Home}
          path="/"

        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />


      </section>
    </div>
  );
}

export default App;
