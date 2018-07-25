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
    <div className="app">
      <div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleSiteHiddenComponents();
          }}
        >
          header
        </button>
      </div>
      {children}
      <div>
        footer
      </div>
    </div>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
