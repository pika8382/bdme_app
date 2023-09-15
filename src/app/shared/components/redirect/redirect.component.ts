import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/shared.interfaces';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  listMenu: MenuItem[] = [
    {
      text: 'Guía para transmisión del BDME',
      url: 'https://www.chip.gov.co/schip_rt/paginiciobdme.htm',
    },
    {
      text: 'Preguntas Frecuentes',
      url: 'https://www.contaduria.gov.co/acerca-de-bdme',
    },
    {
      text: 'Historico de Informes',
      url: 'https://www.contaduria.gov.co/historico-de-informes',
    },
    {
      text: 'Contacto con BDME',
      url: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
