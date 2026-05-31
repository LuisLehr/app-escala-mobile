import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioProvaPage } from './horario-prova.page';

describe('HorarioProvaPage', () => {
  let component: HorarioProvaPage;
  let fixture: ComponentFixture<HorarioProvaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioProvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
