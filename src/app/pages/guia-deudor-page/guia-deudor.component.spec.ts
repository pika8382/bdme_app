import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaDeudorComponent } from './guia-deudor.component';

describe('GuiaDeudorComponent', () => {
  let component: GuiaDeudorComponent;
  let fixture: ComponentFixture<GuiaDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaDeudorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
