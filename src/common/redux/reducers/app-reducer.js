import Types from '../constants/app-types';

const initialState = {
  id: null,
  title: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ARTICLE:
      return state;
      // return { ...state, id: action.payload.id, title: action.payload.title };
    default:
      return state;
  }
}

export default appReducer;
