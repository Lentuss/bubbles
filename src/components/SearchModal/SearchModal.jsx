import React, { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm';
import { getSearched } from 'servises/API';

import { Container, MovieLink, MoviesList } from './SearchModal.styled';

const SearchModal = ({ isVisible }) => {
  ////Shows list

  const [query, setQuery] = useState('');
  const [TVShows, setTVShows] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getSearched(query);

        setTVShows([...resp.results]);
      } catch (error) {
        alert.error('Something went wrong');
      }
    };

    if (query !== '') {
      getData();
    }
  }, [query]);

  const getQuery = query => {
    setQuery(query);
  };

  ////end

  return (
    isVisible && (
      <div>
        <SearchForm onSubmit={getQuery} />
        <Container>
          {TVShows.length !== 0 ? (
            <MoviesList>
              {TVShows.map(TVShow => (
                <li key={TVShow.id}>
                  <MovieLink>
                    <h3>{TVShow.title}</h3>
                  </MovieLink>
                </li>
              ))}
            </MoviesList>
          ) : (
            query !== '' && <p>Nothing found. Try again</p>
          )}
        </Container>
      </div>
    )
  );
};

export default SearchModal;
