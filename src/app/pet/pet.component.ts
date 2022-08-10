import { Component, OnInit } from "@angular/core";
import { MenuModule } from 'primeng/menu';
import { MegaMenuItem,MenuItem, PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.css']
  })
export class PetComponent implements OnInit {

    public items: MenuItem[] = [];
    events1: any[];

    public date: any;
    
    constructor() {
      this.events1 = [
        {status: 'Estética', date: '09/08/2022 10:30', icon: PrimeIcons.CHECK},
        {status: 'Estética', date: '01/08/2022 14:00', icon: PrimeIcons.CHECK},
        {status: 'Saúde', date: '01/06/2022 16:15', icon: PrimeIcons.CHECK},
        {status: 'Saúde', date: '02/04/2022 10:00', icon: PrimeIcons.CHECK}
    ];
     }

  ngOnInit(): void {
    this.items = [{
      label: 'Eventos',
      items: [
          {label: 'Novo Evento', icon: 'pi pi-plus'},
          {label: 'Administrar Eventos', icon: 'pi pi-download'}
      ]
    },
    {
        label: 'Administrativo',
        items: [
            {label: 'Undo', icon: 'pi pi-refresh'},
            {label: 'Redo', icon: 'pi pi-repeat'}
        ]
    }];

  }


}