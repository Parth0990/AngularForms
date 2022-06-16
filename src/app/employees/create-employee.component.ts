import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Department } from '../models/deptartment.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  dateOfBirth: Date = new Date(2022, 0 , 30);
  employee: Employee = {
    id: 0,
    name:"",
    gender: "",
    email:"",
    phoneNumber:0,
    contactPreference:"",
    dateOfBirth: this.dateOfBirth,
    department:"",
    isActive:false,
    photoPath:""
  }

  departments: Department[]=[
    {id:'D1',name:'Help Desk'},
    {id:'D2',name:'HR'},
    {id:'D3',name:'IT'},
    {id:'D4',name:'Payroll'},
  ]  

  previewPhoto=false;

isActive=true;
photoPath="";

togglePhotoPreview()
{
  this.previewPhoto=!this.previewPhoto
}

required:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(empForm:NgForm) {
    console.log(empForm.value);
    console.log(empForm);
  }

    
  
}
