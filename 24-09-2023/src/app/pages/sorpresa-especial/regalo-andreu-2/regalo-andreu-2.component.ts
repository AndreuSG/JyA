import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regalo-andreu-2',
  templateUrl: './regalo-andreu-2.component.html',
  styleUrl: './regalo-andreu-2.component.css'
})
export class RegaloAndreu2Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
