import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-entidade',
  templateUrl: './home-entidade.component.html',
  styleUrls: ['./home-entidade.component.css']
})
export class HomeEntidadeComponent implements OnInit {

  perfil: string | null = "";
  nome: string | null = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.perfil = this.route.snapshot.paramMap.get('perfil')
    this.nome = this.route.snapshot.paramMap.get('nome')
  }
}
