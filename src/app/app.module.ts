import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventoComponent } from './evento/evento.component';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {DividerModule} from 'primeng/divider';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EventoComponent
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
    VirtualScrollerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
