import ListingItem from './listingItem';

class CategoryListingModel {
  constructor(
    articles,
  ) {
    if (articles && articles.length) {
      this.articles = articles.map(article => new ListingItem(article));
    }
  }
}

export default CategoryListingModel;
