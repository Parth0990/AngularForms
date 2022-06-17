import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/deptartment.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  dateOfBirth: Date = new Date(2022, 0 , 30);
  employee: Employee = {
    id: 0,
    name:"",
    gender: "",
    email:"",
    password: "",
    phoneNumber:0,
    confirmPassword: "",
    contactPreference:"",
    dateOfBirth: this.dateOfBirth,
    department:"null",
    isActive:false,
    photoPath:""
  }

  departments: Department[]=[
    {id:'1',name:'Help Desk'},
    {id:'2',name:'HR'},
    {id:'3',name:'IT'},
    {id:'4',name:'Payroll'},
  ]  

  previewPhoto=false;

isActive=true;
photoPath="";

togglePhotoPreview()
{
  this.previewPhoto=!this.previewPhoto
}

required:boolean=true;

  constructor(private _employeeService: EmployeeService, private _router:Router) { }

  ngOnInit(): void {
  }

  // saveEmployee(empForm:NgForm) {
  //   console.log(empForm.value);
  //   console.log(empForm);
  // }

  saveEmployees(): void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

    
  
}
