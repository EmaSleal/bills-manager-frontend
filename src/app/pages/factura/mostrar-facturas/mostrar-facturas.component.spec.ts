import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFacturasComponent } from './mostrar-facturas.component';

describe('MostrarFacturasComponent', () => {
  let component: MostrarFacturasComponent;
  let fixture: ComponentFixture<MostrarFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarFacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
