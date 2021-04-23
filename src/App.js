import React, { useState,useEffect } from 'react';
import './App.css';

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=43393LO2crq4dMK88PYFyHNDSp1V9Www&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    console.log('actualizando los gifs')
    fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const {gifs} = data.map(image => image.images.downsized_medium.url)
        console.log(data);
      })
    }, [])


  return (
    <div className="App">
      <section className='App-content'>

      </section>
    </div>
  );
}

export default App;
