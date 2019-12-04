import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DuenioComponent } from './duenio/duenio.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarmascotaComponent } from './registrarmascota/registrarmascota.component';

@NgModule({
  declarations: [
    AppComponent,
    DuenioComponent,
    MascotasComponent,
    RegistrarmascotaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
