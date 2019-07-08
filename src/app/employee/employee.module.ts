import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService],
  entryComponents: [EmployeeListComponent]
})
export class EmployeeModule { }
