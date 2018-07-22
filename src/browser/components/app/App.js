import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIHandler from '../shared/ui/UIHandler';
import Page from '../shared/ui/Page';

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
            yeah, supercool!
          </p>
        </div>
      </Page>
    );
  }
}

export default UIHandler(App);
