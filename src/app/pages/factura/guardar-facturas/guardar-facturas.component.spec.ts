import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarFacturasComponent } from './guardar-facturas.component';

describe('GuardarFacturasComponent', () => {
  let component: GuardarFacturasComponent;
  let fixture: ComponentFixture<GuardarFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarFacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
