import Request from 'axios';

import Types from '../constants/article-types';

function fetchArticleFromAPI(categoryUri, id) {
  const data = Request.post(
    'http://localhost:9000/api/article',
    {
      categoryUri,
      id,
    },
  );
  return data;
}

export function fetchArticle(params) {
  return async (dispatch) => {
    const { data } = await fetchArticleFromAPI(params.categoryUri, params.id);
    dispatch(
      {
        type: Types.FETCH_ARTICLE,
        payload: Object.assign(
          {},
          data,
        ),
      },
    );
  };
}

export function genericAction() {
  return {};
}
