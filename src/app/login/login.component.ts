import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = "";
  senha = "";
  perfil = "Tutor(a)";

  constructor (private router: Router){    
  }

  ngOnInit(): void {
  }

  realizarLogin(){
    if (this.perfil == "Tutor(a)")
      this.router.navigate(['/app-home-tutor', {perfil: this.perfil, nome: "Sabrina Passos"}]);
    else
      this.router.navigate(['/app-home-entidade', {perfil: this.perfil, nome: "Pet Love"}]);
  }

}


