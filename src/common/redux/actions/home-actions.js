import Request from 'axios';

import Types from '../constants/home-types';

function fetchHomeListingFromAPI(uri) {
  const data = Request.post(
    'http://localhost:9000/api/home',
    {
      uri,
    },
  );
  return data;
}

export function fetchHomeListing(params) {
  return async (dispatch) => {
    const { data } = await fetchHomeListingFromAPI(params.uri);
    dispatch(
      {
        type: Types.FETCH_HOME_LIST,
        payload: Object.assign({}, data, { title: params.title, slug: params.slug }),
      },
    );
  };
}

export function genericAction() {
  return {};
}
