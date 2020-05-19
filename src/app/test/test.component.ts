import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked the Black Eagles</div>
      <div *ngSwitchCase="'blue'">You picked the Blue Lions</div>
      <div *ngSwitchCase="'yellow'">You picked the Golden Deer</div>
      <div *ngSwitchDefault>You picked SMASH!!</div>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  color = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

}
