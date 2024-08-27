import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regalo-andreu-1',
  templateUrl: './regalo-andreu-1.component.html',
  styleUrl: './regalo-andreu-1.component.css'
})
export class RegaloAndreu1Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
