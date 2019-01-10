import { getArticlelUrl } from '../../../common/helpers';

class ListingItem {
  constructor(
    article,
  ) {
    const {
      id,
      category,
      heading,
      body,
    } = article;
    this.category = category;
    this.url = getArticlelUrl(category, id);
    this.title = heading.title;
    this.subtitle = heading.subtitle;
    this.media = heading.media;
    const [mainImage] = this.media;
    this.mainImage = mainImage;
    this.body = body;
  }
}

export default ListingItem;
