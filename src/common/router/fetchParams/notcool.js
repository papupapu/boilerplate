function notcoolFetchParams(uri) {
  let postId = 1;
  if (uri === '/notcool') {
    postId = 2;
  }
  return { id: postId };
}

export default notcoolFetchParams;
