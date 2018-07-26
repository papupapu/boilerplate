import Types from '../constants/app-types';

const initialState = {
  id: null,
  title: null,
  pageTemplate: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ARTICLE:
      return Object.assign(
        {},
        state,
        {
          id: action.payload.id,
          title: action.payload.title,
          pageTemplate: action.payload.pageTemplate,
        },
      );
    default:
      return state;
  }
}

export default appReducer;
