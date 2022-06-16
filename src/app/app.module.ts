import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule,Routes } from '@angular/router';
import { SelectRequiredValidatorDirective } from './shared/select.required.validator.directive';
import { confirmEqualValidatorDirective } from './shared/confirm.equal.validator.directive';

const appRoutes:Routes=[
  { path:'list', component:ListEmployeesComponent },
  { path:'create', component:CreateEmployeeComponent },
  { path:'', redirectTo: '/list', pathMatch:'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    confirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
