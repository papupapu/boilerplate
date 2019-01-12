function articleFetchParams(params) {
  return {
    id: params.id,
    categoryUri: params.path,
  };
}

export default articleFetchParams;
