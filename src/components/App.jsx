import BubbleCanvas from 'animation/bubbles';
import React, { useState } from 'react';

import styled from 'styled-components';

import Header from './Header';
import Details from './Details/Details';
import Trends from './Trends/Trends';

export const App = () => {
  const [movieId, setMovieId] = useState('66732');

  const getId = id => {
    setMovieId(id);
  };

  return (
    <BubbleCanvas>
      <Container>
        <Header />
        <Details id={movieId} />
        <Trends title={'Popular this week'} getId={getId}></Trends>
      </Container>
    </BubbleCanvas>
  );
};

const Container = styled.div`
  padding-left: 86px;
`;
