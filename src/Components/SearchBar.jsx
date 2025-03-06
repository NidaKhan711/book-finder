import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="search-bar flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Book Search</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={onSearch} 
            className="p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;