import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import './style/vars.css';

const propTypes = {
  children: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  pageTemplate: PropTypes.string,
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  children: null,
  title: '',
  pageTemplate: '',
  toggleSiteHiddenComponents: () => {},
};

const Page = (
  {
    children,
    title,
    pageTemplate,
    toggleSiteHiddenComponents,
  },
) => {
  if (pageTemplate === 'fullpage') {
    return (
      <div className="app">
        {children}
      </div>
    );
  }
  return (
    <div className="wrap">
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <div id="header">
        <button
          type="button"
          className="modal_handle"
          onClick={(e) => {
            e.preventDefault();
            toggleSiteHiddenComponents(e, {});
          }}
        >
          header
        </button>
      </div>
      <div className="content">
        {children}
      </div>
      <div id="footer">
        <p>
          footer
        </p>
      </div>
    </div>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
