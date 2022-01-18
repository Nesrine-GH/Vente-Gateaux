import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GateauxPersonalisesService {

  constructor(private http: HttpClient) { }
  getGateauPer() {
    return this.http.get("http://localhost:3000/GateauxPersonalises");
  }
  // saveProduits(produit:any){
  //   return this.http.post("http://localhost:3000/GateauxPersonalises",produit)
  // }
}
