import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ]
})
export class ModulesModule { }
