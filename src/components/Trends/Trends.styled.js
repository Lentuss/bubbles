import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.p`
  margin-bottom: 32px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 13.5%;
  line-height: 1.45;
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const SliderContainer = styled.div`
  max-width: 660px;
  @media (min-width: 1024px) {
    max-width: 912px;
  }
`;

export const AgeRatingBox = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
  width: 174px;
  height: 66px;

  color: #fff;
  background-color: rgba(255, 255, 255, 0.49);
`;
export const AgeRating = styled.span`
  display: inline-block;
  text-align: center;
  padding: 20px 26px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.42;
`;

export const RatingAccent = styled.span`
  display: inline-block;
  width: 33px;
  height: 66px;
  background-color: #d40d1f;
`;
