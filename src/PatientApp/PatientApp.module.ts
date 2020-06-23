import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientComponent } from './PatientApp.component';
import {RouterModule} from '@angular/router';
import {PatientRoutes} from '../Routing/PatientRouting';
import {PatientHomeComponent} from './PatientHomePage.component';
import {PatientMasterComponent} from './PatientMasterPage.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientSearchComponent } from './PatientApp.search.component';

@NgModule({
  declarations: [
    PatientComponent,
    PatientHomeComponent,
    PatientMasterComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, RouterModule.forRoot(PatientRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PatientMasterComponent]
})
export class PatientApp { }
