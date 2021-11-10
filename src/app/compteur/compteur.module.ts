import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompteurComponent } from './compteur/compteur.component';

@NgModule({
    declarations: [
        CompteurComponent
    ],
    exports: [
        CompteurComponent
    ],
    imports: [
        CommonModule
    ]
})

export class CompteurModule {

}
