import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regalo-mama-papa-2',
  templateUrl: './regalo-mama-papa-2.component.html',
  styleUrl: './regalo-mama-papa-2.component.css'
})
export class RegaloMamaPapa2Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
