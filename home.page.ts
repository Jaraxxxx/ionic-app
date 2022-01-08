import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { ModalController, NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ShopCartService } from '../shop-cart.service';
import { ShopPage } from '../shop/shop.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  navCtrl: any;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private router: Router, private cartService: ShopCartService, private modalCtrl: ModalController) {}  
  

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  clickShop(){
    this.router.navigate(['/shop']);
}

addToCart(products){

}

openCart() {
  
}
}