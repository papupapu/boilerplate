import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import './style/app.css';

class App extends Component {
  static propTypes = {
    pageTemplate: PropTypes.string,
    toggleSiteHiddenComponents: PropTypes.func,
  }

  static defaultProps = {
    pageTemplate: '',
    toggleSiteHiddenComponents: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { pageTemplate, toggleSiteHiddenComponents } = this.props;
    return (
      <Page
        pageTemplate={pageTemplate}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      >
        <Helmet>
          <title>
            yeeeeee
          </title>
        </Helmet>
        <p>
          <Link to="/notcool">
            yeah, supercool!
          </Link>
        </p>
      </Page>
    );
  }
}

export default UIHandler(App);
