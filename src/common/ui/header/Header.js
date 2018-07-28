import React from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';
/*
import Hamburger from '../icons/Hamburger';
import Avatar from '../icons/Avatar';
*/
import './Header.css';

const propTypes = {
  isDetail: PropTypes.bool,
  siteName: PropTypes.string,
  categories: PropTypes.instanceOf(Array),
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  isDetail: false,
  siteName: '',
  categories: [],
  toggleSiteHiddenComponents: () => {},
};

const Header = (
  {
    isDetail,
    siteName,
    categories,
    toggleSiteHiddenComponents,
  },
) => (
  <header id="header">
    {
      isDetail ? (
        <div className="logo">
          <Link
            to="/"
            title={siteName}
          >
            {siteName}
          </Link>
        </div>
      )
        : (
          <h1 className="logo">
            <Link
              to="/"
              title={siteName}
            >
              {siteName}
            </Link>
          </h1>
        )
    }
    <ul>
      {
      categories.map(
        category => (
          <li key={`${Math.random()}_nav_link`}>
            <NavLink
              to={`/${category.path}`}
              title={category.label}
              exact={category.label === 'Home'}
            >
              {category.label}
            </NavLink>
          </li>
        ),
      )
    }
    </ul>
    <button
      type="button"
      className="modal_handle"
      onClick={
        (e) => {
          e.preventDefault();
          toggleSiteHiddenComponents(e, {});
        }
      }
    >
      bottone
    </button>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
