function appFetchParams(uri) {
  let postId = 'home';
  if (uri === '/notcool') {
    postId = 2;
  }
  return { id: postId };
}

export default appFetchParams;
