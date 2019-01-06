import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Hamburger from '../icons/Hamburger';
import Avatar from '../icons/Avatar';

const propTypes = {
  isDetail: PropTypes.bool,
  siteName: PropTypes.string,
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  isDetail: false,
  siteName: '',
  toggleSiteHiddenComponents: () => {},
};

const Header = (
  {
    isDetail,
    siteName,
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
            {`${siteName} logo`}
          </Link>
        </div>
      )
        : (
          <h1 className="logo">
            <Link
              to="/"
              title={siteName}
            >
              {`${siteName} logo`}
            </Link>
          </h1>
        )
    }
    <button
      type="button"
      className="menu_handle"
      onClick={
        (e) => {
          e.preventDefault();
          toggleSiteHiddenComponents(e, {});
        }
      }
    >
      <Hamburger />
    </button>

    <button
      type="button"
      className="user modal_handle"
      onClick={
        (e) => {
          e.preventDefault();
          toggleSiteHiddenComponents(e, {});
        }
      }
    >
      <Avatar
        isAuthenticated={false}
      />
    </button>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
