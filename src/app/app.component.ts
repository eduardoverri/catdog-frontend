import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  estaNoLogin = true;

  title = 'catdog-frontend';

  

  constructor(private primengConfig: PrimeNGConfig, private router: Router) { }
  
  ngOnInit(): void {

    this.estaNoLogin = this.router.url == '/';

    this.primengConfig.ripple = true;
  }

}
