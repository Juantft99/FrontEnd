import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivasPage } from './activas.page';

const routes: Routes = [
  {
    path: '',
    component: ActivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivasPageRoutingModule {}
