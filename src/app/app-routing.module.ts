import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GuiaDeudorComponent } from './pages/guia-deudor-page/guia-deudor.component';
import { LoginComponent } from './auth/login/login.component';
import { EstadoEntidadesPageComponent } from './pages/estado-entidades-page/estado-entidades-page.component';
import { MarcoConceptualComponent } from './pages/marco-conceptual-page/marco-conceptual.component';
import { RedirectComponent } from './shared/components/redirect/redirect.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'guiaDeudorMoroso',
    component: GuiaDeudorComponent,
  },
  {
    path: 'estadoEntidades',
    component: EstadoEntidadesPageComponent,
  },
  {
    path: 'marcoConceptual',
    component: MarcoConceptualComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
