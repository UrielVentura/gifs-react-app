import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from "wouter";

function App() {


  return (
    <div className="App">
      <section className='App-content'>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
