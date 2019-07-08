import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  title: string;
  email: string;
  phone: string;
  mobilePhone: string;

  hasError: boolean;

  constructor() {
    /* initialed for validation */
    this.phone = '';
    this.mobilePhone = '';
    this.hasError = false;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {

    this.hasError = false;

    const phone = form.controls["phone"].value;
    const mobilePhone = form.controls["mobilePhone"].value;

    /* since we don't have html validation for phone and mobile-phone */
    if (phone === '' && mobilePhone === '') {
      this.hasError = true;
    } else if (!this.isValidNumber(phone) && !this.isValidNumber(mobilePhone)) {
      this.hasError = true;
    }

    if (!this.hasError) {
      this.hasError = !form.valid;
    }


    if (this.hasError) {
      console.log("hasError", this.hasError);
    }
  }

  /**
   * this method should called after check on empty string
   * @param phone
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
