import Types from '../constants/article-types';

const initialState = {};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_ARTICLE:
      return Object.assign(
        {},
        state,
        action.payload.result.article,
      );
    default:
      return state;
  }
}

export default articleReducer;
