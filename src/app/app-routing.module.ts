import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-evento', component: EventoComponent },
  { path: 'app-pet', component: PetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
