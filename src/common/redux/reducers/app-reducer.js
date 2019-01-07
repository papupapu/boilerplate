import Types from '../constants/app-types';

const initialState = {};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ARTICLELIST:
      return Object.assign(
        {},
        state,
        {
          articles: action.payload.articles,
          id: 0,
          title: 'Home',
        },
      );
    default:
      return state;
  }
}

export default appReducer;
