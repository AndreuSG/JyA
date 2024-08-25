import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Nuestra Historia', icon: 'pi pi-book', routerLink: '/nuestra-historia' },
      { label: 'Sorpresa Especial', icon: 'pi pi-star', routerLink: '/sorpresa-especial' }
    ];
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }
}
