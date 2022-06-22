import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/deptartment.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  // dateOfBirth: Date = new Date();
  employee: Employee;
  panelTitle: string;
  departments: Department[] = [
    { id: '1', name: 'Help Desk' },
    { id: '2', name: 'HR' },
    { id: '3', name: 'IT' },
    { id: '4', name: 'Payroll' },
  ];

  previewPhoto = false;

  isActive = true;
  photoPath = '';

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  required: boolean = true;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((parameterMap) => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: 0,
        name: '',
        gender: '',
        email: '',
        password: '',
        phone: '',
        confirmPassword: '',
        contactPreference: '',
        dateOfBirth: null,
        department: 'null',
        isActive: false,
        photoPath: '',
      };
      this.panelTitle = 'Create Employee';
      // this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      //this.employee = Object.assign({}, this._employeeService.getEmployee(id));
      this._employeeService.getEmployee(id).subscribe((data) => {
        this.employee = data;
      });
    }
  }

  // saveEmployee(empForm:NgForm) {
  //   console.log(empForm.value);
  //   console.log(empForm);
  // }

  saveEmployees(): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    console.log(this.createEmployeeForm.value);
    console.log(this.createEmployeeForm);
    this._employeeService.save(newEmployee).subscribe(
      (data)=> {
        console.log("From Server: ");
        console.log(data);
        this.createEmployeeForm.reset();
        this._router.navigate(['list']);
      }
    );
    
    
    // empForm.reset();
    // this.createEmployeeForm.reset({
    //   name : 'Parth',
    //   contactPreference: 'email'
    // });
  }
}
