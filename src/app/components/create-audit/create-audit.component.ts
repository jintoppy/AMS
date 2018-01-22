import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-audit',
  templateUrl: './create-audit.component.html',
  styleUrls: ['./create-audit.component.css']
})
export class CreateAuditComponent implements OnInit {
  @ViewChild('myForm')
  myForm: NgForm;

  myProp = "hello";
  constructor() { }

  ngOnInit() {
  }

  onBtnClick(){

  }

  onSubmit(){
    console.log(this.myForm.value);
  }

}
