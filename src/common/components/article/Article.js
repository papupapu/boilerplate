import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import UIHandler from '../../ui/UIHandler';
import Page from '../../ui/Page';

import articleFetchParams from '../../router/fetchParams/article';
import { fetchArticle } from '../../redux/actions/article-actions';
import { getCurrentCategory } from '../../helpers';

// import './style/article.css';

const propTypes = {
  shouldFetch: PropTypes.bool,
  pageTemplate: PropTypes.string,
  config: PropTypes.instanceOf(Object),
  ui: PropTypes.instanceOf(Object),
  actions: PropTypes.instanceOf(Object),
  articleId: PropTypes.string,
  categorySlug: PropTypes.string,
  article: PropTypes.instanceOf(Object),
  category: PropTypes.instanceOf(Object),
  // location: PropTypes.instanceOf(Object),
};

const defaultProps = {
  shouldFetch: false,
  pageTemplate: '',
  config: {},
  ui: {},
  actions: {},
  articleId: '',
  categorySlug: '',
  article: {},
  category: {},
  // location: {},
};

class Article extends Component {
  constructor(props) {
    super(props);
    const {
      config: {
        categories,
      },
      categorySlug,
    } = props;
    this.state = {
      currentCategory: getCurrentCategory(categories, `/${categorySlug}`),
    };
  }

  componentWillMount() {
    const {
      shouldFetch,
      actions,
      articleId,
      category,
    } = this.props;
    const {
      currentCategory,
    } = this.state;
    if (shouldFetch) {
      actions.fetchArticle(
        articleFetchParams(
          {
            id: articleId,
            path: currentCategory.path,
          },
        ),
      );
    } else {
      const fromCategory = category[currentCategory.slug].articles
        .filter(article => article.id === articleId);
      if (fromCategory.length === 1) {
        actions.setArticleFromCategory(fromCategory[0]);
      }
    }
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
      article,
      pageTemplate,
    } = this.props;
    return (
      <Page
        config={config}
        pageTemplate={pageTemplate}
        title="article"
        device={device}
        menu={menu}
        modal={modal}
        toggleSiteHiddenComponents={toggleSiteHiddenComponents}
      >
        <article>
          <h2>
            {article.title}
          </h2>
          <p>
            {article.subtitle}
          </p>
        </article>
      </Page>
    );
  }
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;
export default UIHandler(Article, fetchArticle);
