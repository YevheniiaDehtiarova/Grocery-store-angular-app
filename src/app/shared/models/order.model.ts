import { ShoppingCart } from "./shopping-cart";

export class Order {
    datePlaced: number;
    items: any[];
    shipping: {}

    constructor( shipping:any, shoppingCart: ShoppingCart){
        this.datePlaced = new Date().getTime();
        this.shipping =  shipping;
        this.items = shoppingCart.items.map(item => {
            return {
              product: {
                title: item.title,
                imageUrl: item.imageUrl,
                price: item.price
              },
              guantity: item.quantity,
              totalPrice: item.totalPrice,
            }
          });
    }
}