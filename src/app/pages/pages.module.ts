import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { GuiaDeudorComponent } from './guia-deudor-page/guia-deudor.component';
import { EstadoEntidadesPageComponent } from './estado-entidades-page/estado-entidades-page.component';
import { MarcoConceptualComponent } from './marco-conceptual-page/marco-conceptual.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    EstadoEntidadesPageComponent,
    GuiaDeudorComponent,
    HomePageComponent,
    MarcoConceptualComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    EstadoEntidadesPageComponent,
    GuiaDeudorComponent,
    HomePageComponent,
  ],
})
export class PagesModule {}
