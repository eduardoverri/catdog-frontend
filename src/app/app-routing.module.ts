import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { HomeTutorComponent } from './home/home-tutor/home-tutor.component';
import { HomeEntidadeComponent } from './home/home-entidade/home-entidade.component';
import { LoginComponent } from './login/login.component';
import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app-home-tutor', component: HomeTutorComponent },
  { path: 'app-home-entidade', component: HomeEntidadeComponent },
  { path: 'app-evento', component: EventoComponent },
  { path: 'app-pet', component: PetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
