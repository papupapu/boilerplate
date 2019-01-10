export const getArticlelUrl = (category, id) => `/${category}/${id}`;

export const getCurrentCategory = (categories, pathname) => {
  const current = categories.filter(category => category.path === pathname)[0];
  return current;
};
