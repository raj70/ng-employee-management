import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../Models/Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Role } from '../Models/Role';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  @Input()
  roles: Role[];

  title: string;
  email: string;
  phone: string;
  mobilePhone: string;

  hasError: boolean;

  constructor(private service: EmployeeService, private router: Router) {
    /* initialed for validation */
    this.phone = '';
    this.mobilePhone = '';
    this.hasError = false;
  }

  ngOnInit() {
    this.roles = this.service.getRoles();
  }

  onSubmit(form: NgForm): void {

    this.hasError = false;

    const phone = form.controls.phone.value;
    const mobilePhone = form.controls.mobilePhone.value;

    /* since we don't have html validation for phone and mobile-phone */
    if (phone === '' && mobilePhone === '') {
      this.hasError = true;
    } else if (!this.isValidNumber(phone) && !this.isValidNumber(mobilePhone)) {
      this.hasError = true;
    }

    if (!this.hasError) {
      this.hasError = !form.valid;
    }


    if (!this.hasError) {
      const emploee = new Employee();
      emploee.name = form.controls.name.value;
      emploee.dob = form.controls.dob.value;
      emploee.email = form.controls.email.value;
      emploee.lastName = form.controls.lastName.value;
      emploee.middleName = form.controls.middleName.value;
      emploee.mobilePhone = form.controls.mobilePhone.value;
      emploee.phone = form.controls.phone.value;
      emploee.title = form.controls.title.value;
      emploee.roleId = form.controls.roleId.value;

      console.log(emploee);
      this.service.add(emploee)
        .subscribe(o => {
          this.router.navigate(['employees']);

          // TODO: show message
          // TODO: refresh list
          console.log(o.body.message);
        },
          (error) => console.log(error),
          () => console.log('completed'));
    }
  }

  /**
   * this method should called after check on empty string
   */
  private isValidNumber(phone: string): boolean {
    if (phone === '') {
      return true;
    }
    const regex = /^[0-9]\d{8,10}$/g;
    const valid = regex.test(phone);
    return valid;
  }
}
