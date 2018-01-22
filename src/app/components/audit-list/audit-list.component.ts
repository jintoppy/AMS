import { Component, OnInit } from '@angular/core';
import {AuditService} from '../../audit.service';
import {Audit} from '../../models/Audit';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  audits: Array<Audit> = [];
  constructor(private service: AuditService) { }

  ngOnInit() {
    const auditsObservable = this.service.getAudits();
    auditsObservable.subscribe((res) => {
      this.audits = res;
    }, (err : HttpErrorResponse) => {
      console.log(err);
    });
  }

}
