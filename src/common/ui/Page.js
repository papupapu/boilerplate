import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Modal from './modal/Modal';
import Overlayer from './overlayer/Overlayer';

import './style/vars.css';

const propTypes = {
  children: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  pageTemplate: PropTypes.string,
  modal: PropTypes.bool,
  modalType: PropTypes.string,
  modalData: PropTypes.instanceOf(Object),
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  children: null,
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
