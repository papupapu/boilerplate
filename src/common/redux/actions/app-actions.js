import Request from 'axios';

import Types from '../constants/app-types';

function getArticleFromAPI(id) {
  return Request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

function getArticleTitle(id) {
  return async (dispatch) => {
    const { data } = await getArticleFromAPI(id);
    dispatch({ type: Types.GET_ARTICLE, payload: data });
  };
}

export default getArticleTitle;
