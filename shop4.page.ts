import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { NavController } from '@ionic/angular';
import { Shop3Page } from '../shop3/shop3.page';

@Component({
  selector: 'app-shop4',
  templateUrl: './shop4.page.html',
  styleUrls: ['./shop4.page.scss'],
})
export class Shop4Page implements OnInit {

  constructor(private router: Router) {}  

  ngOnInit() {
  }

  iconClickedleft(){
    this.router.navigate(['/shop3']);
}

}
