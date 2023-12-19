import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarFacturasComponent } from './guardar-facturas/guardar-facturas.component';
import { MostrarFacturaComponent } from './mostrar-factura/mostrar-factura.component';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';

const routes: Routes = [
  { path: 'factura/Agregar', component: GuardarFacturasComponent },
  { path: 'factura/Mostrar', component: MostrarFacturasComponent },
  { path: 'factura/Mostrar/:id', component: MostrarFacturaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
