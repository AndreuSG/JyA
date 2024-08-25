import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-regalo-mama-papa-1',
  templateUrl: './regalo-mama-papa-1.component.html',
  styleUrl: './regalo-mama-papa-1.component.css'
})
export class RegaloMamaPapa1Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
