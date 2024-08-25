import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regalo-mama-papa-3',
  templateUrl: './regalo-mama-papa-3.component.html',
  styleUrl: './regalo-mama-papa-3.component.css'
})
export class RegaloMamaPapa3Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
