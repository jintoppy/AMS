import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  myDate = 1516604428422;
  activeView: string;
  onAppMenuItemChange(menuName){
    this.activeView = menuName;
  }
}
