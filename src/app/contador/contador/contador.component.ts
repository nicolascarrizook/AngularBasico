import { Component } from '@angular/core';

@Component({
    selector: 'counter-app',
    templateUrl: './contador.component.html',
})

export class ContadorComponent {
    title: string = "counter app";
    base: number = 5;
    valor: number = 0;

    increment(base: number) {
        this.valor += base;
    }

    decrement(base: number) {
        this.valor -= base;
    }
}