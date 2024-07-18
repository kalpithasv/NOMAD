import React, { useState } from 'react';
import nomadback from '../assets/nomadback.jpg';

const cities = [
  'Jaipur',
  'Delhi',
  'Goa',
'Mumbai',
];

const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      setFilteredCities(cities.filter(city => city.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <header className='w-screen h-screen relative'>
      <img src={nomadback} alt="Background" className='absolute top-0 left-0 w-full h-full object-cover' />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='mb-2'>Explore the world</h1>
        <h1 className='mb-4'>
          with <span className='text-custom-orange'>Nomad</span>
        </h1>
        <form
          action=''
          className='relative flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto'
        >
          <input
            type='text'
            placeholder='Search Destinations'
            className='grow bg-transparent outline-none'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='w-11 btn--form'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
          {filteredCities.length > 0 && (
            <ul className='absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
              {filteredCities.map((city, index) => (
                <li key={index} className='p-2 hover:bg-gray-100 cursor-pointer'>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
    </header>
  );
};

export default Hero;
