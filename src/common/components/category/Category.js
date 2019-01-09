import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import categoryFetchParams from '../../router/fetchParams/category';
import { getArticleTitle } from '../../redux/actions/category-actions';

import '../app/style/app.css';

const propTypes = {
  shouldFetch: PropTypes.bool,
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
  shouldFetch: false,
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

const getCurrentCategory = (categories, pathname) => {
  const current = categories.filter(category => category.path === pathname)[0];
  return current;
};

class Category extends Component {
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
      currentCategory: getCurrentCategory(categories, pathname),
    };
  }

  componentWillMount() {
    const {
      shouldFetch,
      actions,
    } = this.props;
    const {
      currentCategory,
    } = this.state;
    if (shouldFetch) {
      actions.getArticleTitle(
        categoryFetchParams(
          {
            path: currentCategory.path,
            title: currentCategory.title,
            slug: currentCategory.slug,
          },
        ),
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      actions,
      config: {
        categories,
      },
      location,
      category,
    } = this.props;
    const {
      location: {
        pathname,
      },
    } = nextProps;
    const currentCategory = getCurrentCategory(categories, pathname);
    const shouldFetch = location.pathname !== pathname
      && (
        typeof category[currentCategory.slug] === 'undefined'
        || category[currentCategory.slug] === null
        || Object.keys(category[currentCategory.slug]).length === 0
      );
    if (shouldFetch) {
      actions.getArticleTitle(
        categoryFetchParams(
          {
            path: currentCategory.path,
            title: currentCategory.title,
            slug: currentCategory.slug,
          },
        ),
      );
    }
    this.setState({
      currentCategory,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      currentCategory: {
        title,
      },
    } = this.state;
    if (
      nextState.currentCategory.title !== title
      || typeof nextProps.category[nextState.currentCategory] !== 'undefined'
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      config,
      device,
      // category,
      menu,
      modal,
      pageTemplate,
      toggleSiteHiddenComponents,
    } = this.props;
    const {
      currentCategory: {
        title,
      },
    } = this.state;
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
            {title}
          </Link>
        </p>
      </Page>
    );
  }
}

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
export default UIHandler(Category, getArticleTitle);
