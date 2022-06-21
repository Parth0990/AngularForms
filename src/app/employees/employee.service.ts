import { Injectable } from "@angular/core";
import { max, Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { of , delay } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) {}
  private listEmployees: Employee[] ;
    //  [
    //     {
    //         id: 1,
    //         name: 'Mark',
    //         gender: 'Male',
    //         contactPreference: 'Email',
    //         email: 'mark@pragimtech.com',
    //         dateOfBirth: new Date('10/25/1988'),
    //         department: '3',
    //         isActive: true,
    //         photoPath: 'assets/images/mark.png'
    //       },
    //       {
    //         id: 2,
    //         name: 'Mary',
    //         gender: 'Female',
    //         contactPreference: 'Phone',
    //         phoneNumber: 2345978640,
    //         dateOfBirth: new Date('11/20/1979'),
    //         department: '2',
    //         isActive: true,
    //         photoPath: 'assets/images/mary.png'
    //       },
    //       {
    //         id: 3,
    //         name: 'John',
    //         gender: 'Male',
    //         contactPreference: 'Phone',
    //         phoneNumber: 5432978640,
    //         dateOfBirth: new Date('3/25/1976'),
    //         department: '3',
    //         isActive: true,
    //         photoPath: 'assets/images/john.png'
    //       },
    // ];

    getEmployees(): Observable<Employee[]> {
        // return of(this.listEmployees).pipe(delay(3000));
       return this._httpClient.get<Employee[]>('https://localhost:44308/api/employee');
    }

    getEmployee(id : number): Observable<Employee> {
      //return this.listEmployees.find(e => e.id === id);
      return this._httpClient.get<Employee>('https://localhost:44308/api/employee/'+id);
  }

    save(employee: Employee) {
      if(employee.id === 0){
        const maxId = this.listEmployees.reduce(function(e1, e2){
          return (e1.id > e2.id) ? e1 : e2;
        }).id;
        employee.id = maxId + 1;
        this.listEmployees.push(employee);
        console.log(employee)
      }
      else{
        const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
        this.listEmployees[foundIndex] = employee;
      }
    }
    
    deleteEmployee(id: number){
      const i = this.listEmployees.findIndex(e => e.id === id);
      if(i !== -1){
        this.listEmployees.splice(i, 1);
      }
    }
}