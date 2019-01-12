export const log = (x) => {
  console.log(x);
  return null;
};

export const uriMatcher = (url) => {
  let page;
  switch (url.split('/').filter(part => part !== '').length) {
    case 2:
      page = 'article';
      break;
    case 1:
      page = 'category';
      break;
    default:
      page = 'home';
  }
  return page;
};

export const getArticlelUrl = (category, id) => `/${category}/${id}`;

export const getCurrentCategory = (categories, pathname) => {
  const current = categories.filter(category => category.path === pathname)[0];
  return current;
};
