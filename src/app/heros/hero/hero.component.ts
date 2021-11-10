import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponent{
    nom: string = 'Ironman';
    age: number = 45;

    get nomCapitalized(): string {
        return this.nom.toUpperCase();
    }

    montrerNom(): string {
        return `${ this.nom } - ${this.age}`;
    }

    changerNom(): void {
        this.nom = 'Spiderman';
    }

    changerAge(): void {
        this.age = 50
    }
}