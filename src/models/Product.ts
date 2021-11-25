export interface ProductType {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  quantityInCart?: number;
}

class Product implements ProductType {
  quantityInCart?: number;
  constructor(
    public id: string,
    public ownerId: string,
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: number,
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.quantityInCart = 0;
  }
}

export default Product;
