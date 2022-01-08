import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop2PageRoutingModule } from './shop2-routing.module';

import { Shop2Page } from './shop2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop2PageRoutingModule
  ],
  declarations: [Shop2Page]
})
export class Shop2PageModule {}
