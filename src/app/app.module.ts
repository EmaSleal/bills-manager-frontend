import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoModule } from './pages/producto/producto.module';
import { FacturaModule } from './pages/factura/factura.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './utils/shared-module/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SubnivelMenuComponent } from './utils/shared-module/subnivel-menu/subnivel-menu.component';
import { BodyComponent } from './utils/shared-module/body/body.component';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './utils/shared-module/shared-module.module';
import { LoginComponent } from './utils/shared-module/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    SubnivelMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductoModule,
    FacturaModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
