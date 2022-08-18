import BubbleCanvas from 'animation/bubbles';
import React, { useState } from 'react';
import { lazy, Suspense } from 'react';

import styled from 'styled-components';

// import Header from './Header';
// import Details from './Details/Details';
// import Trends from './Trends/Trends';

const Header = lazy(() => import('./Header/Header'));
const Details = lazy(() => import('./Details/Details'));
const Trends = lazy(() => import('./Trends/Trends'));

export const App = () => {
  const [movieId, setMovieId] = useState('66732');

  const getId = id => {
    setMovieId(id);
  };

  return (
    <BubbleCanvas>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Details id={movieId} />
          <Trends title={'Popular this week'} getId={getId}></Trends>
        </Suspense>
      </Container>
    </BubbleCanvas>
  );
};

const Container = styled.div`
  padding-left: 86px;
`;
