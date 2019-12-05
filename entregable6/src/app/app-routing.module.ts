import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarmascotaComponent } from './registrarmascota/registrarmascota.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';


const routes: Routes = [{ path: 'registrarmascota', component: RegistrarmascotaComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'registrarusuario', component: RegistrarUsuarioComponent }

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
