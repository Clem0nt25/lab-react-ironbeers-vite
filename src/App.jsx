import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import AllBeers from './components/AllBeers';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/beers' element={<AllBeers />} />
      <Route path='/beers/:id' element={<SingleBeer />} />
      <Route path='/new-beer' element={<NewBeer />} />
    </Routes>
  );
};

export default App;