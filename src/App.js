 import React,{useState} from 'react';
import './App.css';
import SearchResults from './pages/SearchResults/index';
import { Link, Route } from "wouter";
import Home from './pages/home';
import Detail from './pages/detail';
import StacticContext from './context/StaticContext'

function App() {

  return (
    
    <StacticContext >
      <div className="App">
        <section className='App-content'>
          <Link to='/'>
            <img alt='GiffyLogo' src='/logo.png' />

          </Link>
          <Route
            component={Home}
            path="/"

          />
          <Route
            path="/search/:keyword"
            component={SearchResults}
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />


        </section>
      </div>
    </StacticContext>
  );
}

export default App;
