import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuditService} from '../../audit.service';
import {Audit} from '../../models/Audit';
import {switchMap} from 'rxjs/operators';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-audit',
  templateUrl: './edit-audit.component.html',
  styleUrls: ['./edit-audit.component.css']
})
export class EditAuditComponent implements OnInit {
  auditDetails: Audit;
  myForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private auditService: AuditService
  ) { 
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      auditArea: new FormControl()
    });
  }

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
      this.myForm.setValue({
        name: res.name,
        auditArea: res.auditArea
      });
    });
  }

  saveAudit(e){
    e.preventDefault();
    console.log(this.myForm.value);
  }

  onBtnClick(){
    alert('hi');
  }

}
