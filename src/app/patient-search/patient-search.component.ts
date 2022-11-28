import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  patientId=""

  readValues=()=>
  {
    let data:any={
      "patientId":this.patientId
    }
  }

}
