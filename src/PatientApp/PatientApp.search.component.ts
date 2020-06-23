import { Component } from '@angular/core';
import { PatientModel } from './PatientApp.Model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './PatientApp.search.component.html'
  })
  export class PatientSearchComponent {
    PatientName : string = "";
    PatientModels : Array<PatientModel> = new Array<PatientModel>();
    constructor(public http:HttpClient){
      
    }
    search(){
      this.http.get("https://localhost:44358/api/PatientAPI?PatientName="+this.PatientName)
                    .subscribe(res=>this.success(res),res=>this.error(res));
    }
    success(res){
      this.PatientModels = res;  //Set the collection
    }
    error(res){
      alert(res);
    }
  }