import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Models/Employee';
import { Message } from '../Models/Message';
import { Role } from '../Models/Role';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee: Employee;
  roles: Role[];
  /* is used to hides divs */
  action: string;
  employees: Employee[] = [];
  isError: boolean;
  errorMessage: string;

  constructor(private service: EmployeeService) {
    this.isError = false;
  }

  async ngOnInit() {
    await this.service.getEmployees()
      .subscribe(
        empResponse => {
          const v = empResponse.body.message as unknown as Message;
          this.employees = v.data;
        },
        (error) => {
          this.isError = true;
          this.errorMessage = error.error.message.message;
          console.log(error.error.message.message);
          if (this.isError) {
            this.hideError();
          }
        }, () => {
          // console.log('completed');
        });
    this.roles = this.service.getRoles();
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

  /**
   * Hide ErrorMessage in 5 sec
   */
  hideError(): void {
    setInterval(() => this.isError = false, 5000);
  }
}
