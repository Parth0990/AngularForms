import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  // employees?: Employee[]=[
  //   {
  //     id: 1,
  //     name: 'Mark',
  //     gender: 'Male',
  //     contactPreference: 'Email',
  //     email: 'mark@pragimtech.com',
  //     dateOfBirth: new Date('10/25/1988'),
  //     department: 'IT',
  //     isActive: true,
  //     photoPath: 'assets/images/mark.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mary',
  //     gender: 'Female',
  //     contactPreference: 'Phone',
  //     phoneNumber: 2345978640,
  //     dateOfBirth: new Date('11/20/1979'),
  //     department: 'HR',
  //     isActive: true,
  //     photoPath: 'assets/images/mary.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'John',
  //     gender: 'Male',
  //     contactPreference: 'Phone',
  //     phoneNumber: 5432978640,
  //     dateOfBirth: new Date('3/25/1976'),
  //     department: 'IT',
  //     isActive: false,
  //     photoPath: 'assets/images/john.png'
  //   },
  // ];

  employees: Employee[];
  // employeeToDisplay: Employee;
  // private arrayIndex = 1;

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {

  this.employees = this._employeeService.getEmployees();
  // this.employeeToDisplay = this.employees[0];
  }

  // nextEmployee(): void {
  //   if(this.arrayIndex <= 2){
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   }
  //   else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }


  // dataFromChild: Employee;

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }

  onClick(employeeId: number){
    this._router.navigate(['/employees', employeeId]);
  }

}
