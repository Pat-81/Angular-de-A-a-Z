import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personnage } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent{

  @Input() nouveau: Personnage = {
    nom: '',
    puissance: 0
  }

  constructor( private dbzService: DbzServices) {}

  // @Output() onNouveauPersonnage: EventEmitter<Personnage> = new EventEmitter();

  ajouter() {
    if( this.nouveau.nom.trim().length === 0){
      return;
    }

    // this.onNouveauPersonnage.emit(this.nouveau)
    this.dbzService.ajouterPersonnage( this.nouveau);
    
    this.nouveau = {
      nom: '',
      puissance:0
     }
  }
}
