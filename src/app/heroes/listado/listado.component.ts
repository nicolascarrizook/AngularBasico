import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash'];
  heroeEliminado?: string = '';

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop();
    this.heroeEliminado = heroeBorrado;
  }


}
