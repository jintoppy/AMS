import { Component, OnInit } from '@angular/core';
import {AuditService} from '../../audit.service';
import {Audit} from '../../models/Audit';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  audits: Array<Audit> = [];
  constructor(private service: AuditService) { }

  ngOnInit() {
    this.audits = this.service.getAudits();
  }

}
