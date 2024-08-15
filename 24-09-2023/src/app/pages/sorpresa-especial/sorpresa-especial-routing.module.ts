import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorpresaEspecialComponent } from './sorpresa-especial.component';

const routes: Routes = [{ path: '', component: SorpresaEspecialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorpresaEspecialRoutingModule { }
