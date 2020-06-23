import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './PatientMasterPage.component.html',
})
export class PatientMasterComponent {
  patientName :string="";
  title = 'HospitalManagement';
  MyClick(){
    alert(this.patientName);
  }
}
