import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import appFetchParams from '../../router/fetchParams/app';
import { getArticleList } from '../../redux/actions/app-actions';

import './style/app.css';

const propTypes = {
  shouldUpdate: PropTypes.bool,
  pageTemplate: PropTypes.string,
  config: PropTypes.instanceOf(Object),
  device: PropTypes.instanceOf(Object),
  actions: PropTypes.instanceOf(Object),
  app: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  menu: PropTypes.bool,
  modal: PropTypes.bool,
  toggleSiteHiddenComponents: PropTypes.func,
};

const defaultProps = {
  shouldUpdate: false,
  pageTemplate: '',
  config: {},
  device: {},
  actions: {},
  app: {},
  location: {},
  menu: false,
  modal: false,
  toggleSiteHiddenComponents: () => {},
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateData: false,
    };
  }

  componentWillMount() {
    const { shouldUpdate, actions, location: { pathname } } = this.props;
    if (shouldUpdate) {
      actions.getArticleList(appFetchParams(pathname));
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      app,
    } = this.props;
    const dataCondition = Object.keys(nextProps.app).length > 0 && Object.keys(app).length === 0;
    if (dataCondition) {
      this.setState({
        updateData: true,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      modal,
      menu,
      device,
    } = this.props;
    const {
      updateData,
    } = this.state;
    const modalCondition = nextProps.modal !== modal;
    const menuCondition = nextProps.menu !== menu;
    const deviceCondition = nextProps.device.screenSize !== device.screenSize;
    const dataCondition = nextState.updateData !== updateData;
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
      app,
      config,
      pageTemplate,
      device,
      menu,
      modal,
      toggleSiteHiddenComponents,
    } = this.props;
    return (
      <Page
        config={config}
        pageTemplate={pageTemplate}
        title={app.title}
        device={device}
        menu={menu}
        modal={modal}
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
export default UIHandler(App, getArticleList);
