import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { setTheme } from 'ngx-bootstrap/utils';

import { MainModalComponent } from './modals/main-modal/main-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-animation-test';
  modalRef: BsModalRef;

  constructor(private bsModalService: BsModalService) {
    setTheme('bs4');
  }

  openModal(): void {
    this.modalRef = this.bsModalService.show(MainModalComponent, {});
  }
}
