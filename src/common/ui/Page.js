import React from 'react';
import PropTypes from 'prop-types';

import './style/vars.css';

const propTypes = {
  children: PropTypes.instanceOf(Object),
  pageTemplate: PropTypes.string,
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  children: null,
  pageTemplate: '',
  toggleSiteHiddenComponents: () => {},
};

const Page = (
  {
    children,
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
