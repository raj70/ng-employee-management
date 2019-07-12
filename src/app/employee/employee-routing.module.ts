import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    children: /* https://angular.io/guide/router#child-route-configuration */
      [
        {
          path: 'employee/edit/:id',
          component: EmployeeEditComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'employee/add',
          component: EmployeeAddComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'employee/:id',
          component: EmployeeDetailComponent,
          canActivate: [AuthGuard]
        }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
