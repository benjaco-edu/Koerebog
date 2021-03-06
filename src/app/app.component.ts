import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService){

  }
}
