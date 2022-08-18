import React, { useState } from 'react';

import {
  SearchBar,
  SearchButton,
  FormLabel,
  SearchInput,
} from './SearchForm.styled';

const SearchForm = ({ isVisible }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter the query');
      return;
    }
  };
  return (
    isVisible && (
      <SearchBar onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FormLabel>Search</FormLabel>
        </SearchButton>
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search TV show"
          name="query"
          value={searchQuery}
          onChange={handleInput}
        />
      </SearchBar>
    )
  );
};

export default SearchForm;
