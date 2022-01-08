import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { BehaviorSubject } from 'rxjs';
import { ShopCartService } from '../shop-cart.service';
import { ModalController, NavController } from '@ionic/angular';
import { Shop2Page } from '../shop2/shop2.page';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
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

  iconClicked(){
    this.router.navigate(['/shop2']);
}

addToCart(product){
this.cartService.addProduct(product); 
}

openCart() {
  
}
}

