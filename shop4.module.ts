import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop4PageRoutingModule } from './shop4-routing.module';

import { Shop4Page } from './shop4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop4PageRoutingModule
  ],
  declarations: [Shop4Page]
})
export class Shop4PageModule {}
