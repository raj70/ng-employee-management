import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    children: /* https://angular.io/guide/router#child-route-configuration */
      [
        {
          path: 'employee/edit/:id',
          component: EmployeeEditComponent
        },
        {
          path: 'employee/add',
          component: EmployeeAddComponent
        },
        {
          path: 'employee/:id',
          component: EmployeeDetailComponent
        }        
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
