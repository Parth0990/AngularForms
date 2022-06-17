import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private _id: number;
  employee: Employee;

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router:Router) { }

  // ngOnInit(): void {
  //   // const id = +this._route.snapshot.paramMap.get('id');
  //   const id = +this._route.snapshot.params['id'];
  //   console.log(this._employeeService.getEmployee(id));
  //   this.employee = this._employeeService.getEmployee(id);
  // }

  ngOnInit(): void {
    // this._id= +this._route.snapshot.params['id'];
    // this.employee=this._employeeService.getEmployee(this._id);
    this._route.paramMap.subscribe(params =>{ 
      this._id= +params.get('id')
      this.employee=this._employeeService.getEmployee(this._id);
    })
  }
  viewNextEmployee(){
    if(this._id<3)
    {
      this._id++;
    }
    else{
      this._id=1;
    }
    this._router.navigate(['employees',this._id]);
  }

}
