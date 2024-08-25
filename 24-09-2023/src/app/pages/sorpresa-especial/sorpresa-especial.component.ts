import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sorpresa-especial',
  templateUrl: './sorpresa-especial.component.html',
  styleUrl: './sorpresa-especial.component.css'
})
export class SorpresaEspecialComponent {
  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([`/sorpresa-especial/${path}`]);
  }
}
