import { Component, Input } from '@angular/core';
import { Personnage } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent {

  // @Input()  personnages: Personnage[] = [];
  get personnages() {
    return this.dbzService.personnages;
  }
  
  constructor( private dbzService: DbzServices) {

  }

}
