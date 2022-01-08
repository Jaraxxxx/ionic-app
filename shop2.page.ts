import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { NavController } from '@ionic/angular';
import { Shop3Page } from '../shop3/shop3.page';
import { ShopPage } from '../shop/shop.page';


@Component({
  selector: 'app-shop2',
  templateUrl: './shop2.page.html',
  styleUrls: ['./shop2.page.scss'],
})
export class Shop2Page implements OnInit {

  constructor(private router: Router) {}  

  ngOnInit() {
  }

  iconClickedleft(){
    this.router.navigate(['/shop']);
}

iconClickedright(){
  this.router.navigate(['/shop3']);
}

}
