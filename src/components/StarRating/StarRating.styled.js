import styled from 'styled-components';

export const Rating = styled.div`
  display: block;
  width: 190px;
  margin-bottom: 53px;
`;

export const RatingLine = styled.div`
  position: relative;
  width: 0%;
  height: 30px;
  overflow: hidden;

  & svg:not(:last-child) {
    margin-right: 10px;
  }
`;

export const RatingItems = styled.div`
  position: absolute;
  transform: translateY(-29px);

  & svg:not(:last-child) {
    margin-right: 10px;
  }
`;
