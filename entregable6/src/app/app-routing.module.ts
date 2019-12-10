import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarmascotaComponent } from './registrarmascota/registrarmascota.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { HomeComponent } from './home/home.component';
import { DuenioComponent } from './duenio/duenio.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import {EditarDuenioComponent} from './editar-duenio/editar-duenio.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { EditarVeterinarioComponent } from './editar-veterinario/editar-veterinario.component';
import { AuthduenioGuard } from './auth/authduenio.guard';
import { AuthveterinarioGuard } from './auth/authveterinario.guard';



const routes: Routes = [{ path: '', component: HomeComponent },
                        { path: 'home', component: HomeComponent },
                        { path: 'duenio', component: DuenioComponent, canActivate:[AuthduenioGuard] },
                        { path: 'veterinario', component: VeterinarioComponent,canActivate:[AuthveterinarioGuard] },
                        { path: 'registrarmascota', component: RegistrarmascotaComponent,canActivate:[AuthduenioGuard]},
                        { path: 'editarduenio', component: EditarDuenioComponent , canActivate:[AuthduenioGuard] },
                        { path: 'editarveterinario', component: EditarVeterinarioComponent,canActivate:[AuthveterinarioGuard]},
                        { path: 'mascotas', component: MascotasComponent ,canActivate:[AuthduenioGuard] },
                        { path: 'login', component: LoginComponent },
                        { path: 'registrarusuario', component: RegistrarUsuarioComponent }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
