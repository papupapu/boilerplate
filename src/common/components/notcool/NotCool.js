import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import notcoolFetchParams from '../../router/fetchParams/notcool';
import { getArticleTitle } from '../../redux/actions/notcool-actions';

import './style/app.css';

const propTypes = {
  shouldUpdate: PropTypes.bool,
  pageTemplate: PropTypes.string,
  actions: PropTypes.instanceOf(Object),
  notcool: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  shouldUpdate: false,
  pageTemplate: '',
  actions: {},
  notcool: {},
  location: {},
  toggleSiteHiddenComponents: () => {},
};

class NotCool extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { shouldUpdate, actions, location: { pathname } } = this.props;
    if (shouldUpdate) {
      actions.getArticleTitle(notcoolFetchParams(pathname));
    }
  }

  render() {
    const { notcool, pageTemplate, toggleSiteHiddenComponents } = this.props;
    const title = `${notcool.id} - ${notcool.title}`;
    return (
      <Page
        title={title}
        pageTemplate={pageTemplate}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      >
        <p>
          <Link to="/">
            not cool!!!
          </Link>
        </p>
      </Page>
    );
  }
}

NotCool.propTypes = propTypes;
NotCool.defaultProps = defaultProps;
export default UIHandler(NotCool, getArticleTitle);
