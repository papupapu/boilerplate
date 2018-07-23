import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../ui/UIHandler';
import Page from '../ui/Page';

import './style/app.css';

class App extends Component {
  static propTypes = {
    toggleSiteHiddenComponents: PropTypes.func,
  }

  static defaultProps = {
    toggleSiteHiddenComponents: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { toggleSiteHiddenComponents } = this.props;
    return (
      <Page
        isFullpage={false}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      >
        <div>
          <p>
            <Link to="/notcool">
              yeah, supercool!
            </Link>
          </p>
        </div>
      </Page>
    );
  }
}

export default UIHandler(App);
