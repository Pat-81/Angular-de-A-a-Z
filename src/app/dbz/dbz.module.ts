import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { DbzServices } from './services/dbz.services';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonnagesComponent,
    AjouterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzServices
  ]
})
export class DbzModule { }
