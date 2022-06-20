import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnInit {
  // private _employeeId: number;

  // @Input()
  // set employeeId(val: number){
  //   console.log('employeeId changed from ' + JSON.stringify(this._employeeId) + ' to ' + JSON.stringify(val))
  //   this._employeeId = val;
  // }

  // get employeeId(): number {
  //   return this._employeeId;
  // }

  // private _employee: Employee;

  selectedEmployeeId: number;
  @Input()
  employee: Employee;

  // @Input()
  // set employee(val: Employee) {
  //   console.log(
  //     'Previous : ' + (this._employee ? this._employee.name : 'NULL')
  //   );
  //   console.log('Current : ' + val.name);
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   for(const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to  = JSON.stringify(change.currentValue);

  //     console.log(propName + ' changed from ' + from + ' to ' + to)
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges): void {

  //   const previousEmployee = <Employee> changes['employee'].previousValue;
  //   const currentEmployee = <Employee> changes['employee'].currentValue;

  //   console.log("Previous : " + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log("Current : " + currentEmployee.name);
  // }

  //output decorator
  // @Output()
  // notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  // handleClick() {
  //    this.notify.emit(this.employee);
  // }

  getEmployeeNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

  @Input()
  searchTerm: string;

  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { searchTerm: this.searchTerm }
    });
  }
}
