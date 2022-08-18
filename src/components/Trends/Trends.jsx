import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { getTrends } from 'servises/API';
import {
  Container,
  Title,
  SliderContainer,
  AgeRating,
  AgeRatingBox,
  RatingAccent,
  ContentContainer,
} from './Trends.styled';

const Trends = ({ title, getId }) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getTrends();
        setTrends([...resp.results]);
      } catch (error) {
        alert.error('Something went wrong');
      }
    };
    getData();
  }, []);

  const handleDragStart = e => e.preventDefault();

  const handleClick = e => {
    getId(e.currentTarget.id);
  };
  const items = trends.map(show => (
    <img
      src={
        show.poster_path
          ? 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
            show.poster_path
          : 'https://via.placeholder.com/300x450'
      }
      style={{ border: '1px solid #ffffff', width: '148px', height: '208px' }}
      onDragStart={handleDragStart}
      role="presentation"
      id={show.id}
      alt={show.name}
      onClick={handleClick}
    />
  ));
  return (
    <Container>
      <Title>{title}</Title>
      <ContentContainer>
        <SliderContainer>
          <AliceCarousel
            autoPlay
            autoPlayInterval="3000"
            autoPlayStrategy="all"
            animationDuration="1500"
            mouseTracking
            disableDotsControls
            infinite
            responsive={{
              0: { items: 2 },
              678: { items: 3 },
              1024: { items: 4 },
              1440: { items: 5 },
            }}
            keyboardNavigation
            items={items}
          />
          <></>
        </SliderContainer>
        <AgeRatingBox>
          <RatingAccent />
          <AgeRating>16+</AgeRating>
        </AgeRatingBox>
      </ContentContainer>
    </Container>
  );
};

export default Trends;
