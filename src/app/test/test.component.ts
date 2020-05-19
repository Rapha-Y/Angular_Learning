import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else elseBlock">
      Alice
    </h2>
    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  displayName = false;
  constructor() { }

  ngOnInit(): void {
  }

}
