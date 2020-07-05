import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalInfoForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('PERSONAK INFO');
    console.log(this.personalInfoForm);
  }

}
