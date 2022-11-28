import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  patientName=""
  patientId=""
  address=""
  contactNo=""
  dateofAppointment=""
  doctorName=""
  patientImage=""
  

  readValues=()=>
  {
    let data : any ={
      "patientName":this.patientName,
      "patientId":this.patientId,
      "address":this.address,
      "contactNo":this.contactNo,
      "dateofAppointment":this.contactNo,
      "doctorName":this.doctorName,
      "patientImage":this.patientImage
    }

    console.log(data)
  }





}
