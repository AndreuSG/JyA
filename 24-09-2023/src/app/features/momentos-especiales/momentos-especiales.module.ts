import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentosEspecialesRoutingModule } from './momentos-especiales-routing.module';
import { MomentosEspecialesComponent } from './momentos-especiales.component';


@NgModule({
  declarations: [
    MomentosEspecialesComponent
  ],
  imports: [
    CommonModule,
    MomentosEspecialesRoutingModule
  ]
})
export class MomentosEspecialesModule { }
