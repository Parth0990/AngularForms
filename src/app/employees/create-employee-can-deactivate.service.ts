import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CreateEmployeeComponent } from "./create-employee.component";

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{
        if(component.createEmployeeForm.dirty){
            return confirm('Are you sure you want discard your changes?')
        }
        return true
    }
    
}