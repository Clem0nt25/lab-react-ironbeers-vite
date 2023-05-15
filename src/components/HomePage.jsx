// create empty HomePage component
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <section>        
                <Link to="/beers">
                <img src="./src/assets/beers.png" alt="beers" />
                <h3>Explore Beers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </Link>
            </section>

            <section>
                <Link to="/random-beer">
                <img src="./src/assets/random-beer.png" alt="randombeers" />
                <h3>Discover Random Beer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </Link>
            </section>

            <section>
                <Link to="/new-beer">
                <img src="./src/assets/new-beer.png" alt="newbeer" />
                <h3>Create New Beer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </Link>
            </section>
        </div>
    );
}


export default HomePage;