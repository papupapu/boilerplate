import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import appFetchParams from '../../router/fetchParams/app';
import { getArticleTitle } from '../../redux/actions/app-actions';

import './style/app.css';

const propTypes = {
  shouldUpdate: PropTypes.bool,
  pageTemplate: PropTypes.string,
  actions: PropTypes.instanceOf(Object),
  app: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  shouldUpdate: false,
  pageTemplate: '',
  actions: {},
  app: {},
  location: {},
  toggleSiteHiddenComponents: () => {},
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { shouldUpdate, actions, location: { pathname } } = this.props;
    if (shouldUpdate) {
      actions.getArticleTitle(appFetchParams(pathname));
    }
  }

  render() {
    const { app, pageTemplate, toggleSiteHiddenComponents } = this.props;
    const title = `${app.id} - ${app.title}`;
    return (
      <Page
        pageTemplate={pageTemplate}

        title={title}

        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      >
        <p>
          <Link to="/notcool">
            yeah, supercool!
          </Link>
        </p>
      </Page>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default UIHandler(App, getArticleTitle);
