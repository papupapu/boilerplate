function categoryFetchParams(params) {
  return {
    uri: params.path,
    title: params.title,
    slug: params.slug,
  };
}

export default categoryFetchParams;
