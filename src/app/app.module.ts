import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcceuilComponent } from './components/acceuil/acceuil.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { PanierComponent } from './components/panier/panier.component';
import { GateauxPersonalisesComponent } from './components/gateaux-personalises/gateaux-personalises.component';
// import { GateauxOrientauxComponent } from './components/gateaux-orientaux/gateaux-orientaux.component';
import { PaiementComponent } from './components/paiement/paiement.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    
    ContactsComponent,
    PanierComponent,
    GateauxPersonalisesComponent,
    // GateauxOrientauxComponent,
    PaiementComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
