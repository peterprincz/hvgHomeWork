export class SubscriptionType {
  title: string;
  image: string;
  url: string;
  price: number;
  currency: string;
  published: string;

  constructor(title: string, image: string, url: string, price: number, currency: string, published: string) {
    this.title = title;
    this.image = image;
    this.url = url;
    this.price = price;
    this.currency = currency;
    this.published = published;
  }



}
