import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Header from './header/Header';

import Modal from './modal/Modal';
import Overlayer from './overlayer/Overlayer';

import './style/vars.css';

const propTypes = {
  children: PropTypes.instanceOf(Object),
  config: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  pageTemplate: PropTypes.string,
  modal: PropTypes.bool,
  modalType: PropTypes.string,
  modalData: PropTypes.instanceOf(Object),
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  children: null,
  config: {},
  title: '',
  pageTemplate: '',
  modal: false,
  modalType: '',
  modalData: {},
  toggleSiteHiddenComponents: () => {},
};

const Page = (
  {
    children,
    config,
    title,
    pageTemplate,
    modal,
    modalType,
    modalData,
    toggleSiteHiddenComponents,
  },
) => {
  if (pageTemplate === 'fullpage') {
    return (
      <div className="app">
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
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
      <Header
        isDetail={false}
        siteName={config.siteName}
        categories={config.categories}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      />
      <div className="content">
        {children}
      </div>
      <div id="footer">
        <p>
          footer
        </p>
      </div>
      {
        modal
        && (
          <Modal
            type={modalType}
            data={modalData}
            close={toggleSiteHiddenComponents}
          />
        )
      }
      {Overlayer({ action: toggleSiteHiddenComponents })}
    </div>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
