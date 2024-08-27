import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regalo-lydia-cristian3',
  templateUrl: './regalo-lydia-cristian3.component.html',
  styleUrl: './regalo-lydia-cristian3.component.css'
})
export class RegaloLydiaCristian3Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
