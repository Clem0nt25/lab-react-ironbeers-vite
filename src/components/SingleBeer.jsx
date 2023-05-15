// empty component with SingleBeer
import React, { useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleBeer = (props) => {

    const [singleBeer, setSingleBeer] = React.useState([{}]);

    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setSingleBeer(data);
                console.log(singleBeer);
            });
    }, []);



    return (
        <div>
            <Header />
            <h1>Single Beer</h1>
            <div key={singleBeer._id}>
                <img src={singleBeer.image_url} alt={singleBeer.name} />
                <h1>{singleBeer.name}</h1>
                <h2>{singleBeer.tagline}</h2>
                <p>{singleBeer.first_brewed}</p>
                <p>{singleBeer.attenuation_level}</p>
                <p>{singleBeer.description}</p>
                <p>{singleBeer.contributed_by}</p>
        </div> 

        </div>  
    )
}

export default SingleBeer;