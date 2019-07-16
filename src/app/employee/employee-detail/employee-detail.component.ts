import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Models/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Role } from '../Models/Role';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  @Input()
  employee: Employee;
  @Input()
  roles: Role[];


  constructor(
    private empolyeeService: EmployeeService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.roles);
  }

  ngDoCheck() {
    // TODO: why this is not working?
    // const id: number = this.route.snapshot.paramMap.get('id') as unknown as number;
    // this.empolyeeService.getEmployee(id).subscribe(e => this.employee = e);
  }

  ngOnChanges() {

    // console.log('ngOnChanges');
  }
}
