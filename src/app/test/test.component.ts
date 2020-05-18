import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
        <h2>
            Welcome {{ name }}
        </h2>
        <h2 [style.color]="hasError ? 'red' : 'green'">
            Style Binding
        </h2>
        <h2 [style.color]="highlightColor">
            Style Binding 2, the much anticipated sequel
        </h2>
        <h2 [ngStyle]="titleStyles">
            Style Bindind 3, the end of the trilogy
        </h2>
    `,
    styles: []
})

export class TestComponent implements OnInit {

    public name = 'Alice';
    public hasError = true;
    public isSpecial = true;
    public highlightColor = 'orange';
    public titleStyles = {
        color: 'blue',
        fontStyle: 'italic'
    };

    constructor() {

    }

    ngOnInit() {

    }

}