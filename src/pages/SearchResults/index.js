import React, { useState,useEffect } from 'react';
import Gif from '../../components/Gif'
import getGifs from '../../services/getGifs'

const SearchResults = ({ params }) => {
  const {keyword} = params  
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    getGifs({ keyword })
    .then(gifs => setGifs(gifs)) 
    }, [keyword ])

    return gifs.map(({id, title, url}) =>
        <Gif
        id={id}
        title={title}
        url={url}
        />

    )
}

export default SearchResults
