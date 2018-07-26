import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import { getArticleTitle } from '../../redux/actions/app-actions';

import './style/app.css';

const propTypes = {
  app: PropTypes.instanceOf(Object),
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  app: {},
  toggleSiteHiddenComponents: () => {},
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { app, toggleSiteHiddenComponents } = this.props;
    const title = `${app.id} - ${app.title}`;
    return (
      <Page
        title={title}
        pageTemplate={app.pageTemplate}
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
