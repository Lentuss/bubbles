import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
`;

export const Title = styled.h2`
  color: red;
`;

export const GenresContainer = styled.div`
  display: flex;
`;

export const Genre = styled.span`
  color: orange;
  &:before {
    content: '';
    width: 1px;
    height: 20px;
    background-color: green;
    color: purple;
  }
`;

export const Attributes = styled.div`
  display: flex;
`;

export const ReleaseDate = styled.span``;

export const Director = styled.span``;

export const EpisodesInfo = styled.span``;

export const Overview = styled.p`
  font-style: italic;
`;

export const StarRating = styled.div``;

export const ButtonsSection = styled.div`
  display: flex;
`;

export const BasicButton = styled.Button`
  min-width: 120px;
  padding: 5px;
  border-radius: 5px;
`;
