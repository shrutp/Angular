import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientModel} from "./PatientApp.Model";
@Component({
  selector: 'app-root',
  templateUrl: './PatientApp.component.html',
  styleUrls: ['./PatientApp.component.css']
})
export class PatientComponent {
  patientObj:PatientModel = null ;
  patientObjs:Array<PatientModel> = new Array<PatientModel>();
  constructor(public httpobj:HttpClient){
    this.patientObj = new PatientModel();
  }
  Submit(){
    var patDto : any = {};
    patDto.PatientName = this.patientObj.PatientName;
    patDto.PatientProblem = this.patientObj.PatientProblem;
    this.httpobj.post("https://localhost:44358/api/PatientAPI",patDto)
    .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
  Success(res){
    this.patientObjs = res;  //Set the collection
    this.patientObj = new PatientModel();  //Clear UI
  }
  Error(res){
    alert(res);
  }
  
}
