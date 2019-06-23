import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(employees => this.employees = employees);
  }

}
