import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import { NavLink } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

import Modal from './modal/Modal';
import Overlayer from './overlayer/Overlayer';

import './style/vars.css';
import './style/defaults.css';

const propTypes = {
  children: PropTypes.instanceOf(Object),
  config: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  pageTemplate: PropTypes.string,
  device: PropTypes.instanceOf(Object),
  menu: PropTypes.bool,
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
  device: {},
  menu: false,
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
    device,
    menu,
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
  const navHeight = 'viewport' in device ? device.viewport.width / 100 * 75 : 0;
  return (
    <div className="wrap">
      <Helmet>
        <title>
          {`${title} - ${config.siteName}`}
        </title>
      </Helmet>
      <Header
        isDetail={false}
        menu={menu}
        siteName={config.siteName}
        navHeight={navHeight}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      />
      <nav
        className="siteNav"
      >
        <ul>
          {
            config.categories.map(
              category => (
                <li key={`${Math.random()}_nav_link`}>
                  <NavLink
                    to={`${category.path}`}
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
        <div className="search">
          <form>
            <fieldset>
              <label htmlFor="searchquery">
                Search the site
                <input type="text" id="searchquery" name="searchquery" defaultValue="Search the site" />
              </label>
            </fieldset>
          </form>
        </div>
      </nav>
      <div className="content">
        {children}
      </div>
      <Footer />
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
