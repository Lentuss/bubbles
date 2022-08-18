import styled from 'styled-components';

export const Container = styled.div`
  max-width: 864px;
  color: #ffffff;
  padding: 0 38px 47px 0;
`;

export const Title = styled.h2`
  margin-bottom: 33px;
  font-size: 64px;
  line-height: 1.2;
  letter-spacing: 5.5%;
`;

export const GenresContainer = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 32px;
  margin: 0 0 27px;
`;

export const Genre = styled.span`
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:not(:first-child):before {
    content: '';
    border-left: 2px solid #fff;
    margin-right: 20px;
    background-color: green;
  }
`;

export const Attributes = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 26px;
`;

export const ReleaseDate = styled.span``;

export const Director = styled.span`
  text-transform: uppercase;
  margin-left: 20px;

  &:before {
    content: '';
    border-left: 2px solid #fff;
    margin-right: 20px;
  }
`;

export const AttrValue = styled.span`
  text-transform: capitalize;
  font-weight: normal;
  color: #a7a6a6;
  margin-left: 8px;
`;

export const EpisodesInfo = styled.span`
  margin-left: 20px;

  &:before {
    content: '';
    border-left: 2px solid #fff;
    margin-right: 20px;
  }
`;

export const Overview = styled.p`
  margin-bottom: 36px;
  font-size: 24px;
  line-height: 1.17;
  color: #a7a6a6;
`;

export const ButtonsSection = styled.div`
  display: flex;
`;

export const BasicButton = styled.button`
  min-width: 272px;
  padding: 16px 34px;
  border-radius: 10px;
  border: 3px solid #fff;

  color: #fff;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.45;
  transition: transform 100ms linear;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.05);
  }
`;

export const StreamBtn = styled(BasicButton)`
  display: flex;
  align-items: center;
  background-color: #d40d1f;
  border-color: transparent;
  margin-right: 50px;
`;

export const BtnIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 32px;
  height: 32px;
  margin-left: 16px;
`;
