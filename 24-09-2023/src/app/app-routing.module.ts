import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


// Rutas de la aplicación cargadas con lazy loading
const routes: Routes = [
  {
    path: 'nuestra-historia',
    loadChildren: () => import('./pages/historia/historia.module').then(m => m.HistoriaModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then(m => m.ViajesModule)
  },
  {
    path: 'momentos-especiales',
    loadChildren: () => import('./pages/momentos-especiales/momentos-especiales.module').then(m => m.MomentosEspecialesModule)
  },
  {
    path: 'futuro',
    loadChildren: () => import('./pages/futuro/futuro.module').then(m => m.FuturoModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then(m => m.GaleriaModule)
  },
  {
    path: 'sorpresa-especial',
    loadChildren: () => import('./pages/sorpresa-especial/sorpresa-especial.module').then(m => m.SorpresaEspecialModule)
  },
  {
    path: '', redirectTo: '/nuestra-historia', pathMatch: 'full' // Redirección a una ruta predeterminada
  },
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
