import React from 'react';
import Styled from './styled';
import './Header.styles.css'; //I leave this file because styled-components didn't load correctly
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user-icon.png';

const Header = () => (
  <Styled.Container data-testid="header">
    <img className="header__img" src={logo} alt="Wizeline Academy" />
    <div>
      <input
        data-testid="search-input"
        placeholder="Search…"
        type="text"
        aria-label="search"
        disabled
      />
    </div>
    <span className="header__menu--theme material-icons">visibility</span>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img data-testid="user-icon" src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/" disabled>
            Iniciar Sesión
          </a>
        </li>
      </ul>
    </div>
  </Styled.Container>
);

export default Header;
