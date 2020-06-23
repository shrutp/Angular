import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './PatientHomePage.component.html',
})
export class PatientHomeComponent {
  patientName :string="";
  title = 'HospitalManagement';
  MyClick(){
    alert(this.patientName);
  }
}
