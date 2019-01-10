import Request from 'axios';

import Types from '../constants/category-types';

function fetchCategoryListingFromAPI(uri) {
  const data = Request.post(
    'http://localhost:9000/api/category',
    {
      uri,
    },
  );
  return data;
}

export function fetchCategoryListing(params) {
  return async (dispatch) => {
    const { data } = await fetchCategoryListingFromAPI(params.uri);
    dispatch(
      {
        type: Types.FETCH_CATEGORY_LIST,
        payload: Object.assign({}, data, { title: params.title, slug: params.slug }),
      },
    );
  };
}

export function genericAction() {
  return {};
}
