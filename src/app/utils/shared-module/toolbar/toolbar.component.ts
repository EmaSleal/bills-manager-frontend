import { Component } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar/navbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private navbarService:NavbarService) { }


  public showNavBar(){
    return this.navbarService.toggleNavbar();
  }
}
