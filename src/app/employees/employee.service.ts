import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee.model';
import { of, delay } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import baseUrl from '../helper';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
    this._httpClient.get<Employee[]>(`${baseUrl}`).subscribe((data) =>
    {
      this.listEmployees= data;
    });
  }
  private listEmployees: Employee[];
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
    return this._httpClient
      // .get<Employee[]>('https://localhost:44308/api/employee')
      .get<Employee[]>(`${baseUrl}`)
      .pipe(catchError(this.handleError));
  }

  getEmployee(id: number): Observable<Employee> {
    //return this.listEmployees.find(e => e.id === id);
    return this._httpClient
      .get<Employee>(`${baseUrl}` + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error ', errorResponse.error.message);
    } else {
      console.error('Server Side error: ', errorResponse);
    }

    return throwError(() => new Error('there is a problem with the service.'));
  }

  save(employee: Employee) : Observable<Employee> | null{
    if (employee.id === 0) {
      const maxId = this.listEmployees.reduce(function (e1, e2) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      delete employee.confirmPassword;
      console.log(employee);
      return this._httpClient.post<Employee>(`${baseUrl}`, employee , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
      // this.listEmployees.push(employee);
      // console.log(employee);
    } 
    // return null;
    else {
      // const foundIndex = this.listEmployees.findIndex(
      //   (e) => e.id === employee.id
      // );
      // this.listEmployees[foundIndex] = employee;
      return this._httpClient.put<Employee>(`${baseUrl}`+employee.id,employee,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
    }
  }

  deleteEmployee(id: number) : Observable<Employee> | null {
    const i = this.listEmployees.findIndex((e) => e.id === id);
    if (i !== -1) {
      // this.listEmployees.splice(i, 1);
      return this._httpClient.delete<Employee>(`${baseUrl}`+id ,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
    }
    else{
      return null;
    }
  }
}
