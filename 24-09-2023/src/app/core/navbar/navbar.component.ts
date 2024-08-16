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
      { label: 'Viajes', icon: 'pi pi-globe', routerLink: '/viajes' },
      { label: 'Momentos Especiales', icon: 'pi pi-heart', routerLink: '/momentos-especiales' },
      { label: 'Nuestro Futuro', icon: 'pi pi-calendar', routerLink: '/futuro' },
      { label: 'Galería', icon: 'pi pi-image', routerLink: '/galeria' },
      { label: 'Sorpresa Especial', icon: 'pi pi-star', routerLink: '/sorpresa-especial' }
    ];
  }
}
