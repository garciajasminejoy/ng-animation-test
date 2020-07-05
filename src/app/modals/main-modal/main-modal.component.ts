import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css']
})
export class MainModalComponent implements OnInit {
  isLinear: boolean = true;

  personalInfoForm: FormGroup;
  contactInfoForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personalInfoForm = new FormGroup({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required),
      birthday: new FormControl('')
    });

    this.contactInfoForm = new FormGroup({
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  changeView(): void {
  }

}
