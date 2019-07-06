import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('api/employees');
  }

  getEmployee(id: number): Observable<Employee> {

    const employee = this.http.get<Employee>('api/employees/' + id);

    return employee;
  }
}
