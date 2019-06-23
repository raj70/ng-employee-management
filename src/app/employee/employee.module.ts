import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService],
  entryComponents: [EmployeeListComponent]
})
export class EmployeeModule { }
