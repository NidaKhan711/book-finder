import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './redux/bookSlice';
import BookList from './Components/BookList';
import SearchBar from './components/SearchBar';

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(fetchBooks(query));
  };

  return (
    <div className="app-container bg-black">
      <h1 className="text-3xl font-bold mb-4 text-white  flex justify-center item-center">Book Finder App</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <BookList />
    </div>
  );
}

export default App;