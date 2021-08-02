import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivasPageRoutingModule } from './activas-routing.module';

import { ActivasPage } from './activas.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivasPageRoutingModule,
    PipesModule
  ],
  declarations: [ActivasPage]
})
export class ActivasPageModule {}
