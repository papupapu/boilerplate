import Types from '../constants/notcool-types';

const initialState = {};

function notcoolReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_NC_ARTICLE:
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

export default notcoolReducer;
