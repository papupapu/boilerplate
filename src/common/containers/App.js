import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../components/app/App';
import * as appActions from '../redux/actions/app-actions';

function mapStateToProps(state) {
  return state;
}

// we can merge multiple actions
const actions = [
  appActions,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
