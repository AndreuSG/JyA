import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturoRoutingModule } from './futuro-routing.module';
import { FuturoComponent } from './futuro.component';


@NgModule({
  declarations: [
    FuturoComponent
  ],
  imports: [
    CommonModule,
    FuturoRoutingModule
  ]
})
export class FuturoModule { }
