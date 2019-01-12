import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';


import categoryFetchParams from '../../router/fetchParams/category';
import { fetchCategoryListing } from '../../redux/actions/category-actions';
import { getCurrentCategory } from '../../helpers';

// import './style/category.css';

const propTypes = {
  shouldFetch: PropTypes.bool,
  pageTemplate: PropTypes.string,
  config: PropTypes.instanceOf(Object),
  ui: PropTypes.instanceOf(Object),
  actions: PropTypes.instanceOf(Object),
  category: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
};

const defaultProps = {
  shouldFetch: false,
  pageTemplate: '',
  config: {},
  ui: {},
  actions: {},
  category: {},
  location: {},
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
      actions.fetchCategoryListing(
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
      actions.fetchCategoryListing(
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
      ui: {
        modal,
        menu,
        device,
      },
    } = this.props;
    const {
      currentCategory: {
        title,
      },
    } = this.state;
    const modalCondition = nextProps.ui.modal !== modal;
    const menuCondition = nextProps.ui.menu !== menu;
    const deviceCondition = nextProps.ui.device.screenSize !== device.screenSize;
    const dataCondition = nextState.currentCategory.title !== title
      || typeof nextProps.category[nextState.currentCategory.slug] !== 'undefined';
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
      config,
      ui: {
        device,
        menu,
        modal,
        toggleSiteHiddenComponents,
      },
      category,
      pageTemplate,
    } = this.props;
    const {
      currentCategory: {
        title,
        slug,
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
        {
          category[slug]
          && category[slug].articles.map(article => (
            <article key={`${slug}_article_${Math.random()}`}>
              <h2>
                <Link to={article.url}>
                  {article.title}
                </Link>
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

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
export default UIHandler(Category, fetchCategoryListing);
