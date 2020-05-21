import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li 
        (click)="onSelect(department)" 
        [class.selected]="isSelected(department)" 
        *ngFor="let department of departments"
      >
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId: number;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "React Native"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "Framework"},
    {"id": 5, "name": "Fifth Item"},
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department: {id: number, name: string}) {
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department: {id: number, name: string}) {
    return department.id === this.selectedId;
  }

}
