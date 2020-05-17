import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
            <div>
              inline template
            </div>
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
