import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './component/home/home.component';
import { ParticuliersComponent } from './component/particuliers/particuliers.component';
import { ProfessionnelsComponent } from './component/professionnels/professionnels.component';
import { SatisfactionComponent } from './component/satisfaction/satisfaction.component';
import { SavoirFaireComponent } from './component/savoir-faire/savoir-faire.component';
import { VillesComponent } from './component/villes/villes.component';
import { TourismeComponent } from './component/tourisme/tourisme.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'home' }},
  {path: 'particuliers', component: ParticuliersComponent, data: { animation: 'particuliers' }},
  {path: 'professionnels', component: ProfessionnelsComponent, data: { animation: 'professionnels' }},
  {path: 'satisfaction', component: SatisfactionComponent, data: { animation: 'satisfaction' }},
  {path: 'savoir-faire', component: SavoirFaireComponent, data: { animation: 'savoir-faire' }},
  {path: 'villes', component: VillesComponent, data: { animation: 'villes' }},
  {path: 'tourisme', component: TourismeComponent, data: { animation: 'tourisme' }},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParticuliersComponent,
    ProfessionnelsComponent,
    SatisfactionComponent,
    SavoirFaireComponent,
    VillesComponent,
    TourismeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
