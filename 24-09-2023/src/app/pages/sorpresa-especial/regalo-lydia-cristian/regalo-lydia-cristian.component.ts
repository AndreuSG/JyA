import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-regalo-lydia-cristian',
  templateUrl: './regalo-lydia-cristian.component.html',
  styleUrl: './regalo-lydia-cristian.component.css'
})
export class RegaloLydiaCristianComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
