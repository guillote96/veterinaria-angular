import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarmascotaComponent } from './registrarmascota/registrarmascota.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{ path: 'registrarmascota', component: RegistrarmascotaComponent },
                        { path: 'login', component: LoginComponent }

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
