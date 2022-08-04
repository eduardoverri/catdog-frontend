import { Component, OnInit } from "@angular/core";
import { MenuModule } from 'primeng/menu';
import { MegaMenuItem,MenuItem } from 'primeng/api';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.css']
  })
export class EventoComponent implements OnInit {

    public items: MenuItem[] = [];

    public date: any;
    
    constructor() { }

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