import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop4Page } from './shop4.page';

const routes: Routes = [
  {
    path: '',
    component: Shop4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop4PageRoutingModule {}
