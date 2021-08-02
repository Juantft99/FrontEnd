import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivadetallePageRoutingModule } from './activadetalle-routing.module';

import { ActivadetallePage } from './activadetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivadetallePageRoutingModule
  ],
  declarations: [ActivadetallePage]
})
export class ActivadetallePageModule {}
