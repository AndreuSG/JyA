import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorpresaEspecialRoutingModule } from './sorpresa-especial-routing.module';
import { SorpresaEspecialComponent } from './sorpresa-especial.component';


@NgModule({
  declarations: [
    SorpresaEspecialComponent
  ],
  imports: [
    CommonModule,
    SorpresaEspecialRoutingModule
  ]
})
export class SorpresaEspecialModule { }
