import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
        <h2>
            Welcome {{ name }}
        </h2> 
        <input [id]='myId' type='text' value='Placeholder...'>
        <input bind-disabled='isDisabled' id='{{ myId }}' type='text' value='Placeholder...'>
    `,
    styles: []
})

export class TestComponent implements OnInit {
    
    public name = 'Alice';
    public myId = 'testId';
    public isDisabled = false;

    constructor() {

    }

    ngOnInit() {

    }

}