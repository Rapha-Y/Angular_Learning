import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { "id": 1, "name": "Rose", "age": 21 },
      { "id": 2, "name": "Lily", "age": 20 },
      { "id": 3, "name": "Luna", "age": 19 },
      { "id": 4, "name": "Sara", "age": 24 }
    ];
  }
}
