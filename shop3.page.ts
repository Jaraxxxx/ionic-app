import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { NavController } from '@ionic/angular';
import { Shop4Page } from '../shop4/shop4.page';
import { Shop2Page } from '../shop2/shop2.page';


@Component({
  selector: 'app-shop3',
  templateUrl: './shop3.page.html',
  styleUrls: ['./shop3.page.scss'],
})
export class Shop3Page implements OnInit {

  constructor(private router: Router) {}  

  ngOnInit() {
  }

  iconClickedleft(){
    this.router.navigate(['/shop2']);
}

iconClickedright(){
  this.router.navigate(['/shop4']);
}

}
