import React, { useState } from 'react';

import {
  SearchBar,
  SearchButton,
  FormLabel,
  SearchInput,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryValue = '';

  const handleInput = e => {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery({ query: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (queryValue.trim() === '') {
      alert('Enter the query');
      return;
    }

    onSubmit(queryValue);
  };
  return (
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
        value={queryValue}
        onChange={handleInput}
      />
    </SearchBar>
  );
};

export default SearchForm;
