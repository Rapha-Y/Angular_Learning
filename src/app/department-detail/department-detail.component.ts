import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Your selected the department with id = {{ departmentId }}</h3>
    
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId], {relativeTo: this.route});
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', {id: selectedId, test: 'testValue'}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
