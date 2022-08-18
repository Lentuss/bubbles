import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 38px 38px 0 0;
  margin-bottom: 115px;
`;

export const CurrentDate = styled.span`
  font-family: 'Kyiv Type Titling', sans-serif;
  font-weight: 500;
  display: inline-block;
  color: #c8c8c8;
  margin-left: 42px;

  &:before {
    content: '';
    border-right: solid 2px transparent;
    margin-right: 20px;
    height: 28px;
    background-color: white;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  width: 400px;
  margin: 0 0 0 auto;
`;
export const SearchModalBtn = styled.button`
  text-align: center;
  background-color: transparent;
  border-color: transparent;
  width: 43px;
  height: 43px;
`;

export const AvatarBox = styled.div`
  width: 74px;
  border-radius: 50%;
  overflow: hidden;

  margin-left: 45px;
`;
