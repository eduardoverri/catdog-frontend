import { Component, Input, OnInit } from "@angular/core";
import { MenuModule } from 'primeng/menu';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Router } from "@angular/router";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  public date: any;

  @Input() perfil: string | null = "";
  @Input() nome: string | null = "";

  pets: string[] = [];
  parceiras: string[] = [];

  constructor (private router: Router){    
  }

  ngOnInit(): void {
    
  }

  searchPet(event: any) {
    this.pets = ["Bento", "Lolita", "Caramelo", "Bulma"];
  }

  searchParceiras(event: any) {
    this.parceiras = ["Pet Love", "Clinica XYZ"];
  }

  salvar(){
      this.router.navigate(['/app-home-tutor', {perfil: this.perfil, nome: "Sabrina Passos"}]);
 
  }

}