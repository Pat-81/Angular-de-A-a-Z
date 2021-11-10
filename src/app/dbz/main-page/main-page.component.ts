import { Component, OnInit } from '@angular/core';
import { Personnage } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nouveau: Personnage = {
    nom: 'Tortue Génial',
    puissance: 12000
  }
  
  constructor(){}
}
