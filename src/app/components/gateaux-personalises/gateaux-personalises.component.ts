import { Component, OnInit } from '@angular/core';
import { GateauxPersonalisesService } from 'src/app/services/gateauxpersonalises.service';

@Component({
  selector: 'app-gateaux-personalises',
  templateUrl: './gateaux-personalises.component.html',
  styleUrls: ['./gateaux-personalises.component.css']
})
export class GateauxPersonalisesComponent implements OnInit {


Liste= {
  "id": '',
  "links": '',
  "title": '',
  "Description": '',
  "Prix": ''
}
  constructor(
    private gateauxpersonalisesService:GateauxPersonalisesService,
  ) { }
listegateauxpersonalises:any;
  ngOnInit(): void {
    this.listeGatPer()
  }
  listeGatPer() {
    this.gateauxpersonalisesService.getGateauPer().subscribe(data => {
      this.listegateauxpersonalises = data
      console.log(this.listegateauxpersonalises)
    })
  }



}
