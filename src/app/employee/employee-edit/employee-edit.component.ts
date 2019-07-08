import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  @Input()
  employee: Employee;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  async ngDoCheck() {
    //const id: number = this.route.snapshot.paramMap.get('id') as unknown as number;
    //await this.service.getEmployee(id).subscribe(e => this.employee = e);
  }

  onSubmit(form: NgForm): void {

  }
}
