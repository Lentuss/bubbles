import React, { useEffect, useState } from 'react';

import { getDetails } from '../../servises/API';
import StarRating from 'components/StarRating/StarRating';

import {
  Container,
  GenresContainer,
  Genre,
  Attributes,
  Title,
  ReleaseDate,
  Director,
  AttrValue,
  EpisodesInfo,
  BasicButton,
  StreamBtn,
  BtnIcon,
  ButtonsSection,
  Overview,
} from './Details.styled';

const Details = ({ id }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async id => {
      try {
        const resp = await getDetails(id);
        if (!resp) {
          return;
        }
        setMovie(resp);
      } catch (error) {
        alert.error('Something went wrong');
      }
    };
    getData(id);
  }, [id]);

  const getGenres = () => {
    if (movie.length !== 0) {
      const genres = movie.genres.map(genre => genre.name);
      return genres;
    }
  };
  const score = Number.parseInt(movie.vote_average * 10);
  const genresContent = getGenres();

  return (
    movie.lenght !== 0 && (
      <Container>
        {genresContent && (
          <GenresContainer>
            {genresContent.map(genre => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </GenresContainer>
        )}
        <Title>{movie.name}</Title>
        <Attributes>
          <ReleaseDate>
            {movie.first_air_date && (
              <span>{movie.first_air_date.slice(0, 4)}</span>
            )}
          </ReleaseDate>
          <Director>
            Director:
            <AttrValue>Shawn Levy</AttrValue>
          </Director>
          <EpisodesInfo>
            seasons:
            <AttrValue>
              {movie.number_of_seasons} ({movie.number_of_episodes} episodes)
            </AttrValue>
          </EpisodesInfo>
        </Attributes>
        <Overview>{movie.overview}</Overview>
        <StarRating score={score} />

        <ButtonsSection>
          <StreamBtn>
            Stream now
            <BtnIcon>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 0C6.26875 0 0 6.26875 0 14C0 21.7313 6.26875 28 14 28C21.7313 28 28 21.7313 28 14C28 6.26875 21.7313 0 14 0ZM18.5031 14.2156L11.6781 19.1812C11.6407 19.2081 11.5966 19.2242 11.5507 19.2276C11.5047 19.2311 11.4587 19.2218 11.4177 19.2008C11.3767 19.1798 11.3422 19.1479 11.3182 19.1087C11.2941 19.0694 11.2813 19.0242 11.2812 18.9781V9.05313C11.2811 9.00696 11.2937 8.96165 11.3178 8.92222C11.3418 8.8828 11.3762 8.85079 11.4173 8.82976C11.4584 8.80873 11.5046 8.79948 11.5506 8.80305C11.5966 8.80663 11.6408 8.82288 11.6781 8.85L18.5031 13.8125C18.5354 13.8353 18.5617 13.8655 18.5798 13.9006C18.598 13.9357 18.6075 13.9746 18.6075 14.0141C18.6075 14.0536 18.598 14.0925 18.5798 14.1275C18.5617 14.1626 18.5354 14.1928 18.5031 14.2156Z"
                  fill="white"
                />
              </svg>
            </BtnIcon>
          </StreamBtn>
          <BasicButton>All episodes</BasicButton>
        </ButtonsSection>
      </Container>
    )
  );
};

export default Details;
