import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Category from '../components/category/Category';
import * as categoryActions from '../redux/actions/category-actions';

function mapStateToProps(state, ownProps) {
  const current = ownProps.location.pathname.replace('/', '');
  let shouldFetch = false;
  if (
    typeof state.category[current] === 'undefined'
    || state.category[current] === null
    || Object.keys(state.category[current]).length === 0
  ) {
    shouldFetch = true;
    return Object.assign({}, state, { shouldFetch });
  }
  return state;
}

// we can merge multiple actions
const actions = [
  categoryActions,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
