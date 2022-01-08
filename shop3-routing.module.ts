import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop3Page } from './shop3.page';

const routes: Routes = [
  {
    path: '',
    component: Shop3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop3PageRoutingModule {}
