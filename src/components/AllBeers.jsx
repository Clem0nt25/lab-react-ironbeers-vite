//empty AllBeers component
import React, { useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const AllBeers = () => {

    const [beers, setBeers] = React.useState([]);
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => response.json())
            .then((data) => {
                setBeers(data);
            });
    }, []);


    return (
        <div>
            <Header />
            {beers.map((beer) => {
                return (
                    <Link to={`/beers/${beer._id}`}>
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} />
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <p>{beer.contributed_by}</p>
                    </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default AllBeers;