import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import img from '../../img/PassLogo.svg';

const Header = () => {
  const {
    container,
    header,
    header__container: headerContainer,
    header__link: link,
  } = classes;

  return (
    <div className={container}>
      <header className={header}>
        <div className={headerContainer}>
          <Link to="/">
            <img
              className={classes.img}
              src={img}
              alt="Logo"
            />
          </Link>
          <Link to="/" className={link}>
            <h2>Home</h2>
          </Link>
          <Link to="/generator" className={link}>
            <h2>Generate</h2>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
