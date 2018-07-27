import Types from '../constants/app-types';

const initialState = {};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ARTICLE:
      return Object.assign(
        {},
        state,
        {
          id: action.payload.id,
          title: action.payload.title,
        },
      );
    default:
      return state;
  }
}

export default appReducer;
