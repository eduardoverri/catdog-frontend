import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTutorComponent } from './home/home-tutor/home-tutor.component';
import { HomeEntidadeComponent } from './home/home-entidade/home-entidade.component';
import { LoginComponent } from './login/login.component';
import { EventoComponent } from './evento/evento.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { PetComponent } from './pet/pet.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomeTutorComponent,
    HomeEntidadeComponent,
    LoginComponent,
    EventoComponent,
    PetComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    MegaMenuModule,
    MenubarModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    VirtualScrollerModule,
    TimelineModule,
    CardModule,
    FormsModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
