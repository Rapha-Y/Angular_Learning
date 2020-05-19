import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    { "id": 1, "name": "Rose", "age": 21 },
    { "id": 2, "name": "Lily", "age": 20 },
    { "id": 3, "name": "Luna", "age": 19 },
    { "id": 4, "name": "Sara", "age": 24 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
