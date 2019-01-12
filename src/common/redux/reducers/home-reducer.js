import Types from '../constants/home-types';

const initialState = {};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_HOME_LIST:
      return Object.assign(
        {},
        state,
        {
          articles: action.payload.articles,
          title: action.payload.title,
          slug: action.payload.slug,
        },
      );
    default:
      return state;
  }
}

export default homeReducer;
