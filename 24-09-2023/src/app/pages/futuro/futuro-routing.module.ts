import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuturoComponent } from './futuro.component';

const routes: Routes = [{ path: '', component: FuturoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuturoRoutingModule { }
