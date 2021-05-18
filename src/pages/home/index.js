import React, {useState} from 'react'
import {Link,useLocation} from 'wouter'

const POPULAR_GIFS = ["Matrix", "Israel","Piano","Up","Jean" ]
 
const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt =>{
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)

    }
    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }


    return (
        <>       
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange} className='' type='text' value={keyword}/>
        </form>
            <h3 className="App-tittle"> Los Gifs mas populares</h3>
            <ul className='home-populargif-ul' >
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif} >
                            <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
            
        </>
    )
}

export default Home
