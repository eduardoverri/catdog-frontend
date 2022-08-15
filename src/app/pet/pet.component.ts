import { Component, OnInit } from "@angular/core";
import { MenuModule } from 'primeng/menu';
import { MegaMenuItem,MenuItem, PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.css']
  })
export class PetComponent implements OnInit {

    events1: any[];

    constructor() {
      this.events1 = [
        {status: 'Lolita - Estética - Pet Love', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, image: 'gato2.png', text: 'Banho na Pet Love, obviamentente a Lolita Não gosta de banho...'},
        {status: 'Saúde - Bento - Clinica XYZ', date: '15/10/2020 14:00', icon: PrimeIcons.CALENDAR_PLUS, image: 'cachorro2.jpg', text: 'Foi difícil, levamos um susto mas vamos superar!'},
        {status: 'Outros - Bento', date: '15/10/2020 14:00', icon: PrimeIcons.CAR, image: 'cachorro1.jpg', text: 'Cansados pós passeio com o coleguina no parque 🥰'},
    ];
     }

  ngOnInit(): void {
    
  }


}