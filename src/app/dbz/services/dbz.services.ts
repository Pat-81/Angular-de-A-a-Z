import { Injectable } from "@angular/core";
import { Personnage } from "../interfaces/dbz.interface";

@Injectable()
export class DbzServices {
    private _personnages:  Personnage[] = [
        {
          nom: 'Goku',
          puissance: 15000
        },
        {
          nom: 'Vegeta',
          puissance: 13000
        },
      ];

      get personnages(): Personnage[] {
        return [...this._personnages];
      }
    
    constructor() {}

    ajouterPersonnage(perso: Personnage) {
        this._personnages.push( perso);
    }
}