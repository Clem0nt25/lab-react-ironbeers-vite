import React, { useState } from 'react';
import Header from './Header';

const NewBeer = () => {
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(beerData),
      });
      if (response.ok) {
        console.log('New beer created successfully!');
        // Reset the form after successful submission
        setBeerData({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: '',
        });
      } else {
        console.log('Error creating new beer');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create New Beer</h2>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={beerData.name} onChange={handleChange} />
        </label>
        <label>
          Tagline:
          <input type="text" name="tagline" value={beerData.tagline} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={beerData.description} onChange={handleChange} />
        </label>
        <label>
          First Brewed:
          <input type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleChange} />
        </label>
        <label>
          Brewers Tips:
          <input type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleChange} />
        </label>
        <label>
          Attenuation Level:
          <input type="number" name="attenuation_level" value={beerData.attenuation_level} onChange={handleChange} />
        </label>
        <label>
          Contributed By:
          <input type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleChange} />
        </label>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;