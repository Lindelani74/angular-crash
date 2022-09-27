//This is basically the structure for every component
//"Bring in a component from core"
import { Component } from '@angular/core';

//This is the declaration
@Component({
  //The tag  I will use to embed the tag into teh html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash';
}
