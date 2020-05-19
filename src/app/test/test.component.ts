import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      {{ "Hello " + name }}
    </h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;

  constructor() { }

  ngOnInit(): void {
  }

}
