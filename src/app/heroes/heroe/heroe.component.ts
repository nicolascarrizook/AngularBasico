import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})

export class heroeComponent {
    nombre: string = 'Aquaman';
    edad  : number = 500;

    get capitalizarNombre():string {
        return this.nombre.toUpperCase();
    }

    getData():string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Batman'; 
    }

    cambiarEdad():void{
        this.edad = 30;
    }   
}