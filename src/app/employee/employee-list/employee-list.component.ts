import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee: Employee;
  action: string;
  employees: Employee[] = [];

  constructor(private service: EmployeeService) { }

  async ngOnInit() {
    await this.service.getEmployees().subscribe(employees => this.employees = employees);
  }

  onSelect(emp: Employee): void {
    this.selectedEmployee = emp;
  }

  onDetail(event: Event, emp: Employee): void {
    event.preventDefault();
    this.action = 'detail';
    this.selectedEmployee = emp;
  }

  onEdit(event: Event, emp: Employee): void {
    event.preventDefault();
    this.action = 'edit';
    this.selectedEmployee = emp;
  }

  onAdd(): void {
    this.action = 'add';
  }
}
