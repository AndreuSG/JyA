import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorpresaEspecialComponent } from './sorpresa-especial.component';
import { RegaloMamaPapa1Component } from './regalo-mama-papa-1/regalo-mama-papa-1.component';
import { RegaloMamaPapa2Component } from './regalo-mama-papa-2/regalo-mama-papa-2.component';
import { RegaloMamaPapa3Component } from './regalo-mama-papa-3/regalo-mama-papa-3.component';
import { RegaloAndreu1Component } from './regalo-andreu-1/regalo-andreu-1.component';
import { RegaloAndreu2Component } from './regalo-andreu-2/regalo-andreu-2.component';
import { RegaloLydiaCristianComponent } from './regalo-lydia-cristian/regalo-lydia-cristian.component';
import { RegaloLydiaCristian2Component } from './regalo-lydia-cristian2/regalo-lydia-cristian2.component';
import { RegaloLydiaCristian3Component } from './regalo-lydia-cristian3/regalo-lydia-cristian3.component';

const routes: Routes = [
  { path: '', component: SorpresaEspecialComponent },
  { path: 'regalo-mama-papa-1', component: RegaloMamaPapa1Component },
  { path: 'regalo-mama-papa-2', component: RegaloMamaPapa2Component },
  { path: 'regalo-mama-papa-3', component: RegaloMamaPapa3Component },
  { path: 'regalo-lydia-cristian-1', component: RegaloLydiaCristianComponent },
  { path: 'regalo-lydia-cristian-2', component: RegaloLydiaCristian2Component },
  { path: 'regalo-lydia-cristian-3', component: RegaloLydiaCristian3Component },
  { path: 'regalo-andreu-1', component: RegaloAndreu1Component },
  { path: 'regalo-andreu-2', component: RegaloAndreu2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorpresaEspecialRoutingModule { }
