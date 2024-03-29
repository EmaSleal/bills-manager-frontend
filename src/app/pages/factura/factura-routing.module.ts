import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarFacturasComponent } from './guardar-facturas/guardar-facturas.component';
import { MostrarFacturaComponent } from './mostrar-factura/mostrar-factura.component';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';
import { AuthGuard } from 'src/app/service/AuthGuard';

const routes: Routes = [
  { path: 'factura/Agregar', component: GuardarFacturasComponent, canActivate: [AuthGuard] },
  { path: 'factura/Mostrar', component: MostrarFacturasComponent, canActivate: [AuthGuard] },
  { path: 'factura/Mostrar/:id', component: MostrarFacturaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
