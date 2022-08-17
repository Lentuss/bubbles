import SearchModal from 'components/SearchModal';
import React, { useState } from 'react';
import moment from 'moment';

import logoImg from '../../images/logo.png';
import avatar from '../../images/ava.png';

import {
  CurrentDate,
  HeaderBox,
  AvatarBox,
  SearchModalBtn,
  HeaderContainer,
} from './Header.styled';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const today = moment().format('dddd MMMM  Do');

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoImg} alt="logo" height="48" width="156" />
      </a>
      <CurrentDate>{today}</CurrentDate>
      <HeaderBox>
        <SearchModalBtn
          type="button"
          aria-label="перемикач меню пошуку"
          onClick={handleClick}
        >
          <svg version="1.1" width="20" height="20" fill="white">
            <path d="M12.9 14.32c-1.34 1.049-3.050 1.682-4.908 1.682-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8 0 1.858-0.633 3.567-1.695 4.925l0.013-0.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z"></path>
          </svg>
        </SearchModalBtn>
        <AvatarBox>
          <img src={avatar} alt="avatar" height="74" width="74" />
        </AvatarBox>
      </HeaderBox>
      <SearchModal isVisible={isVisible} />
    </HeaderContainer>
  );
};

export default Header;
