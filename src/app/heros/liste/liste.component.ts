import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: 'liste.component.html'
})
export class ListeComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  herosSupprime: string = ""

  effacerHero() {
    this.herosSupprime = this.heros.shift() || '';
  }
}
