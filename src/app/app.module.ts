import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { MainModalComponent } from './modals/main-modal/main-modal.component';
import { PersonalInfoComponent } from './modals/personal-info/personal-info.component';
import { ContactInfoComponent } from './modals/contact-info/contact-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainModalComponent,
    PersonalInfoComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [
    MainModalComponent
  ]
})
export class AppModule { }
