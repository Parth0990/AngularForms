import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Injectable()
export class EmployeeListResolverService
  implements Resolve<Employee[] | string>
{
  constructor(private _employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[] | string> {
    return this._employeeService.getEmployees().pipe(
      catchError((err: string) => of(err))
    );
  }
}

//Error Handling With Observable
// export class EmployeeListResolverService
//   implements Resolve<ResolvedEmployeeList>
// {
//   constructor(private _employeeService: EmployeeService) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<ResolvedEmployeeList> {
//     return this._employeeService.getEmployees().pipe(
//       map((employeeList) => new ResolvedEmployeeList(employeeList)),
//       catchError((err: any) => of(new ResolvedEmployeeList(null, err)))
//     );
//   }
// }
