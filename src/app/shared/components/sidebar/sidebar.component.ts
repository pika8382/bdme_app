import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/shared.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  private menuItems: MenuItem[] = [
    {
      ruta: 'login',
      text: 'Consultas al Boletín de Deudores Morosos del Estado',
    },
    {
      ruta: 'home',
      text: 'Inicio',
    },
    {
      ruta: 'guiaDeudorMoroso',
      text: 'Guía del Deudor Moroso',
    },
    {
      ruta: 'estadoEntidades',
      text: 'Estado de Transmisión de Entidades Reportantes del BDME',
    },
    {
      ruta: 'marcoConceptual',
      text: 'Marco Conceptual',
    },
    {
      ruta: 'redirect',
      text: 'Más opciones BDME',
    },
  ];
  constructor() {}

  get searchMenuItems() {
    return [...this.menuItems];
  }

  ngOnInit(): void {}
}
