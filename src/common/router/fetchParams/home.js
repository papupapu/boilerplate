function homeFetchParams(params) {
  return {
    uri: `${params.path}${params.slug}`,
    title: params.title,
    slug: params.slug,
  };
}

export default homeFetchParams;
