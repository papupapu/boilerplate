/* eslint import/no-unresolved: 0 */

const config = require('Config');

function configReducer(state = {}) {
  return Object.assign(
    {},
    state,
    config,
  );
}

export default configReducer;
