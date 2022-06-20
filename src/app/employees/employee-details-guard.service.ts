import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
    
    constructor(private _employeeService: EmployeeService,
        private _router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const employeeExits = this._employeeService.getEmployee(+route.paramMap.get('id'));

        if(employeeExits) {
            return true;
        }
        else {
            this._router.navigate(['notfound']);
            return false;
        }
    }
}