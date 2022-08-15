import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  @Input() perfil: string | null = "";
  @Input() nome: string | null = "";

  constructor() { }

  ngOnInit(): void {

    this.items = [{
      label: 'Eventos',
      items: [
          {label: 'Novo Evento', icon: 'pi pi-plus', routerLink: '/app-evento'},
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
