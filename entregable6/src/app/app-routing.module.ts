import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarmascotaComponent } from './registrarmascota/registrarmascota.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { HomeComponent } from './home/home.component';
import { DuenioComponent } from './duenio/duenio.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import {EditarDuenioComponent} from './editar-duenio/editar-duenio.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
                        { path: 'duenio', component: DuenioComponent },
                        { path: 'registrarmascota', component: RegistrarmascotaComponent },
                        { path: 'editarduenio', component: EditarDuenioComponent},
                        { path: 'mascotas', component: MascotasComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'registrarusuario', component: RegistrarUsuarioComponent }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
