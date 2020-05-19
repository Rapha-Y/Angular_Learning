import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      {{ name }}
    </h2>
    <h2>
      {{ name | lowercase }}
    </h2>
    <h2>
      {{ name | uppercase }}
    </h2>
    <h2>
      {{ message | titlecase }}
    </h2>
    <h2>
      {{ name | slice:0:2 }}
    </h2>
    <h2>
      {{ person | json }}
    </h2>
  `,
  styles: []
})

export class TestComponent implements OnInit {

  public name = "Alice";
  public message = "Welcome to Wiosna";
  public person = {
    "firstName": "Gyro",
    "lastName": "Zeppeli"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
