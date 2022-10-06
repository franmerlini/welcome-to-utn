import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public fillerNav = [
    { name: 'Materias', route: '/materias', icon: 'menu_book' },
  ];
}
