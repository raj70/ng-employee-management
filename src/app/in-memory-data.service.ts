// https://angular.io/tutorial/toh-pt6
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const employees = [
      { id: 11, name: 'Dr Nice', email: 'r@g.com', title: 'Dr', middleName: '', lastName: 'Nice', phone: 96325874, dob: Date.now() },
      { id: 12, name: 'Narco', email: 'r@g.com', title: 'Mr', middleName: '', lastName: 'Abcd', phone: 96325874, dob: Date.now() },
      { id: 13, name: 'Bombasto', email: 'r@g.com', title: 'Mr', middleName: 'd', lastName: 'Xyz', phone: 96325874, dob: Date.now() },
      { id: 14, name: 'Celeritas', email: 'r@g.com', title: 'Mrx', middleName: 'd', lastName: 'x', phone: 96325874, dob: Date.now() },
      { id: 15, name: 'Magneta', email: 'r@g.com', title: 'Mr', middleName: 'd', lastName: 'x', phone: 96325874, dob: Date.now() },
      { id: 16, name: 'RubberMan', email: 'r@g.com', title: 'Mrs', middleName: 'd', lastName: 'x', phone: 96325874, dob: Date.now() },
      { id: 17, name: 'Dynama', email: 'r@g.com', title: 'Mr', middleName: 'd', lastName: 'x', phone: 96325874, dob: Date.now() },
      { id: 18, name: 'Dr IQ', email: 'r@g.com', title: 'Dr', middleName: 'd', lastName: 'x', phone: 96325874, dob: Date.now() },
      { id: 19, name: 'Magma', email: 'r@g.com', title: 'Mrs', middleName: '', lastName: 'y', phone: 96325874, dob: Date.now() },
      { id: 20, name: 'Tornado', email: 'r@g.com', title: 'Mr', middleName: 'd', lastName: 'z', phone: 96325874, dob: Date.now() }
    ];
    return { employees };
  }
}
