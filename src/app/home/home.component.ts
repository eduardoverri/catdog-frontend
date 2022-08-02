import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MegaMenuItem,MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: MenuItem[] = [];


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
