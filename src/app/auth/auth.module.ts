import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthNavComponent } from '../auth/auth-nav/auth-nav.component';
import { LoginComponent } from '../auth/login/login.component';

import { AuthService } from './auth.service';


@NgModule({
  declarations: [AuthNavComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  /* so that the components are visible on main Module (or other module) */
  exports: [
    AuthNavComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
