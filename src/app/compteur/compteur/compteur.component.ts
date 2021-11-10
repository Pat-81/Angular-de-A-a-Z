import { Component } from "@angular/core";

@Component({
    selector: 'app-compteur',
    template: `
    <h1 class="text-center py-3">{{ title }}</h1>
    <hr>
    <h2 class="text-center">Incrémenter ou Décrémenter</h2>
    <h3 class="text-center">La base est : <strong>{{ base }}</strong></h3>
    <div class="text-center">
        <button class="btn btn-primary"  (click)=accumuler(-base) > - {{ base }}</button>
        <span> {{ nombre }} </span>
        <button class="btn btn-primary" (click)=accumuler(base) > + {{ base }}</button>
    </div>
    <hr>
`
})

export class CompteurComponent {
    // Propriétés
    public title: string = 'App Compteur';
    public nombre: number = 10;
    public base: number = 5;

    // Méthodes de classe
    accumuler(valeur: number) {
        this.nombre += valeur;
    }

}