// create empty random beer components
import React, { useEffect } from 'react'
import Header from './Header'

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = React.useState([])
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => response.json())
            .then((data) => {
                setRandomBeer(data)
            })
    }, [])



    return (
        <div>
            <Header />

            <div key={randomBeer._id}>
                <img src={randomBeer.image_url} alt={randomBeer.name} />
                <h1>{randomBeer.name}</h1>
                <h2>{randomBeer.tagline}</h2>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
            
        </div>
    )
}

export default RandomBeer   

