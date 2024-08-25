import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';


// Rutas de la aplicación cargadas con lazy loading
const routes: Routes = [
  {
    path: 'nuestra-historia',
    loadChildren: () => import('./pages/historia/historia.module').then(m => m.HistoriaModule)
  },
  {
    path: 'sorpresa-especial',
    loadChildren: () => import('./pages/sorpresa-especial/sorpresa-especial.module').then(m => m.SorpresaEspecialModule)
  },
  { path: '', component: InicioComponent },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
