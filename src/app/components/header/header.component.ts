import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  onMenuChange: EventEmitter<string> = new EventEmitter<string>();

  menuList = [
    {
      displayName: 'Dashboard',
      name: 'dashboard'
    },
    {
      displayName: 'Audits',
      name: 'auditList'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.onMenuChange.emit('dashboard');
  }

  onMenuClick(menuItem){
    this.onMenuChange.emit(menuItem.name);
  }

}
