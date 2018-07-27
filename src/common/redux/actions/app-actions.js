import Request from 'axios';

import Types from '../constants/app-types';

function getArticleFromAPI(id) {
  return Request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export function getArticleTitle(params) {
  return async (dispatch) => {
    const { data } = await getArticleFromAPI(params.id);
    dispatch({ type: Types.GET_ARTICLE, payload: data });
  };
}

export function genericAction() {
  return {};
}
