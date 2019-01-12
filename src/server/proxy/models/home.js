import ListingItem from './listingItem';

class HomeListingModel {
  constructor(
    articles,
  ) {
    if (articles && articles.length) {
      this.articles = articles.map(article => new ListingItem(article));
    }
  }
}

export default HomeListingModel;
