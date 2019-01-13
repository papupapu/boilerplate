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
    case Types.SET_ARTICLE_FROM_CATEGORY:
      return Object.assign(
        {},
        state,
        action.payload.article,
      );
    default:
      return state;
  }
}

export default articleReducer;
