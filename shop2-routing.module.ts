import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop2Page } from './shop2.page';

const routes: Routes = [
  {
    path: '',
    component: Shop2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop2PageRoutingModule {}
