import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DuenioComponent } from './duenio/duenio.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarmascotaComponent } from './registrarmascota/registrarmascota.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { HomeComponent } from './home/home.component';
import { EditarDuenioComponent } from './editar-duenio/editar-duenio.component';
import { EditarVeterinarioComponent } from './editar-veterinario/editar-veterinario.component';

@NgModule({
  declarations: [
    AppComponent,
    DuenioComponent,
    MascotasComponent,
    RegistrarmascotaComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    HomeComponent,
    EditarDuenioComponent,
    EditarVeterinarioComponent
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
