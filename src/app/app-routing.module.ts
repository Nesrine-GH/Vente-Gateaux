import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AcceuilComponent } from './components/acceuil/acceuil.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { PanierComponent } from './components/panier/panier.component';
import { GateauxPersonalisesComponent } from './components/gateaux-personalises/gateaux-personalises.component';
// import { GateauxOrientauxComponent } from './components/gateaux-orientaux/gateaux-orientaux.component';
// import { NouvellesCreationsComponent } from './components/nouvelles-creations/nouvelles-creations.component';
import { PaiementComponent } from './components/paiement/paiement.component';

const routes: Routes = [
{path:'',component:AcceuilComponent},

{path:'gateaux-personalises',component:GateauxPersonalisesComponent},
// {path:'gateaux-orientaux',component:GateauxOrientauxComponent},
// {path:'nouvellescreations',component:NouvellesCreationsComponent},
{path:'contacts',component:ContactsComponent},
{path:'panier',component:PanierComponent},
{path:'paiement',component:PaiementComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
