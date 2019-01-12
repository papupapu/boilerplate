import ListingItem from './listingItem';

class ArticleModel {
  constructor(
    article,
  ) {
    if (article) {
      this.article = new ListingItem(article);
    }
  }
}

export default ArticleModel;
