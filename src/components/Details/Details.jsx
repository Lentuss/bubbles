import React, { useEffect, useState } from 'react';

import { getDetails } from 'services/API';

import {
  Container,
  GenresContainer,
  Genre,
  Attributes,
  Title,
  ReleaseDate,
  Director,
  EpisodesInfo,
  StarRating,
  BasicButton,
  ButtonsSection,
  VoteAverage,
  Overview,
} from './Details.styled';

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // if (movieId !== movie.id) {
    //   return;
    // } else {
    const getData = async movieId => {
      try {
        const resp = await getDetails(movieId);
        if (!resp) {
          return;
        }
        setMovie(resp);
        console.dir(resp);
      } catch (error) {
        alert.error('Something went wrong');
      }
    };
    getData(movieId);
    // }
  }, [movieId]);

  const getGenres = () => {
    if (movie.length !== 0) {
      const genres = movie.genres.map(genre => genre.name);
      return genres;
    }
  };
  const genresContent = getGenres();
  return (
    <Container>
      {movieId === String(movie.id) ? (
        <>
          <GenresContainer>
            {genresContent.map(genre => (
              <Genre>{genre}</Genre>
            ))}
          </GenresContainer>
          <Title>{movie.title}</Title>
          <Attributes>
            <ReleaseDate>
              {movie.release_date && (
                <span>{movie.release_date.slice(0, 4)}</span>
              )}
            </ReleaseDate>
            <Director>sdcssd</Director>
            <EpisodesInfo>Overview</EpisodesInfo>
          </Attributes>
          <Overview>{movie.overview}</Overview>
          <StarRating>
            User score: {Number.parseInt(movie.vote_average * 10)}%
          </StarRating>
          <ButtonsSection>
            <BasicButton></BasicButton>
            <BasicButton></BasicButton>
          </ButtonsSection>
          {/* <Genres>{genresContent}</Genres> */}
        </>
      ) : (
        <p>No movie here</p>
      )}
    </Container>
  );
};

export default MovieDetails;
