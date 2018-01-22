import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuditService} from '../../audit.service';
import {Audit} from '../../models/Audit';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.css']
})
export class AuditDetailsComponent implements OnInit {
  auditDetails: Audit;
  constructor(
    private route: ActivatedRoute,
    private auditService: AuditService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((param: ParamMap) => {
        const auditId = param.get('auditId');
        return this.auditService.getAuditById(auditId);
      })
    )
    .subscribe((res: Audit) => {
      this.auditDetails = res;
    });

  }

}
