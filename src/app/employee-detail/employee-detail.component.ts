import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

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
