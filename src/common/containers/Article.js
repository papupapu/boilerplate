import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Article from '../components/article/Article';
import * as articleActions from '../redux/actions/article-actions';

function mapStateToProps(state, ownProps) {
  const parts = ownProps.location.pathname.split('/').filter(part => part !== '');
  const categorySlug = parts[0];
  const articleId = parts[1];
  let shouldFetch = false;
  if (
    typeof state.category[categorySlug] === 'undefined'
    || state.category[categorySlug] === null
    || Object.keys(state.category[categorySlug]).length === 0
    || state.category[categorySlug].articles.filter(
      article => article.id === articleId,
    ).length === 0
  ) {
    shouldFetch = true;
    return Object.assign({}, state, { shouldFetch, articleId, categorySlug });
  }
  return Object.assign({}, state, { articleId, categorySlug });
}

// we can merge multiple actions
const actions = [
  articleActions,
  // userActions,
];

function mapDispatchToProps(dispatch) {
  const getActionFunctions = (act) => {
    let resultObj = {};
    act.map((action) => {
      Object.keys(action).forEach(
        (key) => {
          if (typeof action[key] === 'function') {
            resultObj = Object.assign({}, resultObj, { [key]: action[key] });
          }
        },
      );
      return action;
    });
    return resultObj;
  };

  const creators = getActionFunctions(actions);
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
