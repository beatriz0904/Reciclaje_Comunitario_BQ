import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroPartipantesComponent } from './registro-partipantes/registro-partipantes.component';
import { RegistroActividadComponent } from './registro-actividad/registro-actividad.component';
import { RegistroCampanaComponent } from './registro-campana/registro-campana.component';
import { RegistroRecompensaComponent } from './registro-recompensa/registro-recompensa.component';
import { RegistroAccionReciclajeComponent } from './registro-accion-reciclaje/registro-accion-reciclaje.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro-partipante', pathMatch: 'full' },
  { path: 'registro-partipantes', component: RegistroPartipantesComponent },
  { path: 'registro-actividad', component: RegistroActividadComponent },
  { path: 'registro-campana', component: RegistroCampanaComponent },
  { path: 'registro-recompensa', component: RegistroRecompensaComponent },
  { path: 'registro-accion-reciclaje', component: RegistroAccionReciclajeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
