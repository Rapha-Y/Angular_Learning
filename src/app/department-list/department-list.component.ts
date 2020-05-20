import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "React Native"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "Framework"},
    {"id": 5, "name": "Fifth Item"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: {id: number, name: string}) {
    this.router.navigate(['/departments', department.id]);
  }

}
