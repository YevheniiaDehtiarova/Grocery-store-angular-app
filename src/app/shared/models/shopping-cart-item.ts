export class ShoppingCartItem {
  title: string;
  price: number;
  $key: string;
  imageUrl: string;
  quantity: number;
  id: string;
  category: string;

  constructor(init?: Partial<ShoppingCartItem>){
    Object.assign(this,init)
  }

  get totalPrice() { return this.price * this.quantity; }
}

