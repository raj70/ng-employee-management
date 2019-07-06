import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;

  constructor(private empolyeeService: EmployeeService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id: number = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.empolyeeService.getEmployee(id).subscribe(e => this.employee = e);
    console.log(this.employee, id);
  }

}
