import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoEntidadesPageComponent } from './estado-entidades-page.component';

describe('EstadoEntidadesPageComponent', () => {
  let component: EstadoEntidadesPageComponent;
  let fixture: ComponentFixture<EstadoEntidadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoEntidadesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoEntidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
