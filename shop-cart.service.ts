import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShopPage } from './shop/shop.page';
import { Shop2Page } from './shop2/shop2.page';
import { Shop3Page } from './shop3/shop3.page';
import { Shop4Page } from './shop4/shop4.page';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  data: any[] = [
    {ShopPage},{Shop2Page},{Shop3Page},{Shop4Page}
  ];


  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
let added = false;
for(let p of this.cart) {
   
}
  }

  decreaseProduct(product) {

  }

  removeProduct(product) {

  }

  addToCart(products){

  }
  
}
