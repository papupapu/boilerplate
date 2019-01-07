import Request from 'axios';

import Types from '../constants/app-types';

function getArticleListFromAPI(id) {
  return Request.get(`http://localhost:8888/${id}.json`);
}

export function getArticleList(params) {
  return async (dispatch) => {
    const { data } = await getArticleListFromAPI(params.id);
    dispatch({ type: Types.GET_ARTICLELIST, payload: data });
  };
}

export function genericAction() {
  return {};
}
