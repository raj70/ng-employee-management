import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Models/Employee';
import { AbstractHttpService } from 'src/app/Utils/AbstractHttpService';
import { Message, RoleResponse } from './Models/Message';
import { Role } from './Models/Role';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractHttpService {

  private roles: Role[];

  constructor(protected http: HttpClient) {
    super(http);
    this.roles = [];
    this.setRoles();
  }

  getEmployees(): Observable<HttpResponse<Message>> {
    return this.http.get<Message>('api/employees',
      {
        headers: this.LoginTokenOnHeader(),
        reportProgress: true,
        observe: 'response',
        responseType: 'json'
      });
  }

  getEmployee(id: number): Observable<Employee> {
    const employee = this.http.get<Employee>('api/employees/' + id);

    return employee;
  }

  add(employee: Employee): Observable<HttpResponse<Message>> {
    return this.http.post<Message>('api/employee', employee, {
      headers: this.LoginTokenOnHeader().set('Content-Type', 'application/json'),
      reportProgress: true,
      observe: 'response',
      responseType: 'json'
    });
  }

  /**
   *  sets roles form API
   */
  setRoles(): void {
    this.http.get<RoleResponse>('api/Auth/Roles', {
      headers: this.LoginTokenOnHeader()
    }).subscribe((response) => {
      this.roles = (response.message as unknown as RoleResponse).data;
    }
      , (error) => {
        console.log('error-setRoles', error);
      }
      , () => { console.log('completed'); });
  }

  getRoles(): Role[] {
    return this.roles;
  }
}
