import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompteurModule } from './compteur/compteur.module';
import { HerosModule } from './heros/heros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerosModule,
    CompteurModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
