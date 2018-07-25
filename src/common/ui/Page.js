import React from 'react';
import PropTypes from 'prop-types';

import './style/vars.css';

const propTypes = {
  children: PropTypes.instanceOf(Object),
  isFullpage: PropTypes.bool,
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  children: null,
  isFullpage: true,
  toggleSiteHiddenComponents: () => {},
};

const Page = (
  {
    children,
    isFullpage,
    toggleSiteHiddenComponents,
  },
) => {
  if (isFullpage) {
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
