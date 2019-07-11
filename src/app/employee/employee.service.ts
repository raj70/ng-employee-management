import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Models/Employee';
import { AbstractHttpService } from 'src/Utils/AbstractHttpService';
import { Message } from './Models/Message';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractHttpService {

  constructor(protected http: HttpClient) {
    super(http);
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
}
