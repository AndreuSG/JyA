import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regalo-lydia-cristian2',
  templateUrl: './regalo-lydia-cristian2.component.html',
  styleUrl: './regalo-lydia-cristian2.component.css'
})
export class RegaloLydiaCristian2Component {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
