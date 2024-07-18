// src/components/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const city = query.get('city');

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-3xl">Search Results for {city}</h1>
    </div>
  );
};

export default SearchResults;
