import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentosEspecialesComponent } from './momentos-especiales.component';

const routes: Routes = [{ path: '', component: MomentosEspecialesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomentosEspecialesRoutingModule { }
