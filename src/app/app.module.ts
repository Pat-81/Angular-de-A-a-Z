import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompteurModule } from './compteur/compteur.module';
import { DbzModule } from './dbz/dbz.module';
import { HerosModule } from './heros/heros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerosModule,
    CompteurModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
