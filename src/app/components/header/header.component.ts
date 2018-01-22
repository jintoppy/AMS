import { Component, OnInit, EventEmitter } from '@angular/core';
import {AuditService} from '../../audit.service';
import {Audit} from '../../models/Audit';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  auditCount: number;
  menuList = [
    {
      displayName: 'Dashboard',
      name: 'dashboard'
    },
    {
      displayName: 'Audits',
      name: 'audits'
    },
    {
      displayName: 'Create Audit',
      name: 'createaudit'
    }
  ]
  constructor(private auditService: AuditService) { }

  ngOnInit() {
    this.auditService.onAuditListChange.subscribe((res: Array<Audit>) => {
      this.auditCount = res.length;
    });
  }   
}
