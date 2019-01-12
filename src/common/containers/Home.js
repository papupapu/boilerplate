import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from '../components/home/Home';
import * as homeActions from '../redux/actions/home-actions';

function mapStateToProps(state) {
  let shouldUpdate = false;
  if (Object.keys(state.home).length === 0) {
    shouldUpdate = true;
    return Object.assign({}, state, { shouldUpdate });
  }
  return state;
}

// we can merge multiple actions
const actions = [
  homeActions,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
