import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsuntosComponent } from './asunto/asuntos/asuntos.component';
import { EditarAsuntoComponent } from './asunto/editar-asunto/editar-asunto.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParticularComponent } from './particular/particular/particular.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'asuntos', component: AsuntosComponent},
  {path: 'asuntos/editar', component: EditarAsuntoComponent},
  {path: 'particular', component: ParticularComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
