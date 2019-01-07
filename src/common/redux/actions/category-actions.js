import Request from 'axios';

import Types from '../constants/category-types';

function getArticleFromAPI(uri) {
  return Request.get(`http://localhost:8888${uri}.json`);
}

export function getArticleTitle(params) {
  return async (dispatch) => {
    const { data } = await getArticleFromAPI(params.uri);
    dispatch(
      {
        type: Types.GET_CATEGORY_LIST,
        payload: Object.assign({}, data, { title: params.title, slug: params.slug }),
      },
    );
  };
}

export function genericAction() {
  return {};
}
