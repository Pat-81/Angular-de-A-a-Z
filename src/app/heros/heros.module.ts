import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListeComponent
    ],
    exports: [
        ListeComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HerosModule {

}
