import Types from '../constants/category-types';

const initialState = {};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CATEGORY_LIST:
      return Object.assign(
        {},
        state,
        {
          [action.payload.slug]: {
            articles: action.payload.articles,
            title: action.payload.title,
          },
        },
      );
    default:
      return state;
  }
}

export default categoryReducer;
