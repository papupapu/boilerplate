import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import homeFetchParams from '../../router/fetchParams/home';
import { fetchHomeListing } from '../../redux/actions/home-actions';
import { getCurrentCategory } from '../../helpers';

import './style/home.css';

const propTypes = {
  shouldUpdate: PropTypes.bool,
  pageTemplate: PropTypes.string,
  config: PropTypes.instanceOf(Object),
  ui: PropTypes.instanceOf(Object),
  actions: PropTypes.instanceOf(Object),
  home: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
};

const defaultProps = {
  shouldUpdate: false,
  pageTemplate: '',
  config: {},
  ui: {},
  actions: {},
  home: {},
  location: {},
};

class Home extends Component {
  constructor(props) {
    super(props);

    const {
      config: {
        categories,
      },
      location: {
        pathname,
      },
    } = props;
    this.state = {
      homeFetchData: getCurrentCategory(categories, pathname),
    };
  }

  componentWillMount() {
    const {
      shouldUpdate,
      actions,
    } = this.props;
    const {
      homeFetchData,
    } = this.state;
    if (shouldUpdate) {
      actions.fetchHomeListing(
        homeFetchParams(
          {
            path: homeFetchData.path,
            title: homeFetchData.title,
            slug: homeFetchData.slug,
          },
        ),
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      actions,
      home,
    } = this.props;
    const {
      homeFetchData,
    } = this.state;
    const shouldFetch = Object.keys(nextProps.home).length > 0
      && Object.keys(home).length === 0;
    if (shouldFetch) {
      actions.fetchHomeListing(
        homeFetchParams(
          {
            path: homeFetchData.path,
            title: homeFetchData.title,
            slug: homeFetchData.slug,
          },
        ),
      );
    }
  }

  shouldComponentUpdate(nextProps) {
    const {
      ui: {
        modal,
        menu,
        device,
      },
    } = this.props;
    const modalCondition = nextProps.ui.modal !== modal;
    const menuCondition = nextProps.ui.menu !== menu;
    const deviceCondition = nextProps.ui.device.screenSize !== device.screenSize;
    const dataCondition = typeof nextProps.home !== 'undefined';
    if (
      modalCondition
      || menuCondition
      || deviceCondition
      || dataCondition
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      home,
      config,
      pageTemplate,
      ui: {
        modal,
        menu,
        device,
        toggleSiteHiddenComponents,
      },
    } = this.props;
    return (
      <Page
        config={config}
        pageTemplate={pageTemplate}
        title={home.title}
        device={device}
        menu={menu}
        modal={modal}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      >
        {
          'title' in home
          && (
            <p>
              <Link to="/">
                {home.title}
              </Link>
            </p>
          )
        }
        {
          'articles' in home
          && home.articles.map(article => (
            <article key={`${home.slug}_article_${Math.random()}`}>
              <h2>
                {article.title}
              </h2>
              <p>
                {article.subtitle}
              </p>
            </article>
          ))
        }
      </Page>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default UIHandler(Home, fetchHomeListing);
