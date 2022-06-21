import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input()
  empId:number;

  @Input()
  hasJustViewed: boolean;

  @Input()
  title: string;

  @Input()
  isHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

}
