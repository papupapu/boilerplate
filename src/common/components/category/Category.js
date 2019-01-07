import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import categoryFetchParams from '../../router/fetchParams/category';
import { getArticleTitle } from '../../redux/actions/category-actions';

import '../app/style/app.css';

const propTypes = {
  shouldUpdate: PropTypes.bool,
  pageTemplate: PropTypes.string,
  config: PropTypes.instanceOf(Object),
  device: PropTypes.instanceOf(Object),
  actions: PropTypes.instanceOf(Object),
  category: PropTypes.instanceOf(Object),
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
  category: {},
  location: {},
  menu: false,
  modal: false,
  toggleSiteHiddenComponents: () => {},
};

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const {
      shouldUpdate,
      actions,
      config: {
        categories,
      },
      location: {
        pathname,
      },
    } = this.props;
    if (shouldUpdate) {
      const current = categories.filter(category => category.path === pathname)[0];
      actions.getArticleTitle(
        categoryFetchParams(
          {
            path: current.path,
            title: current.title,
            slug: current.slug,
          },
        ),
      );
    }
  }

  shouldComponentUpdate(nextProps) {
    const { modal, device } = this.props;
    const modalCondition = nextProps.modal !== modal;
    const deviceCondition = nextProps.device.screenSize !== device.screenSize;
    if (
      modalCondition
      || deviceCondition
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      config,
      device,
      category,
      menu,
      modal,
      pageTemplate,
      toggleSiteHiddenComponents,
    } = this.props;
    const title = `${category.id} - ${category.title}`;
    return (
      <Page
        config={config}
        pageTemplate={pageTemplate}
        title={title}
        device={device}
        menu={menu}
        modal={modal}
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

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
export default UIHandler(Category, getArticleTitle);
