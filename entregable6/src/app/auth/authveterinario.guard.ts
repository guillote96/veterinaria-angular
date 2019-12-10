import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VeterinarioServicio } from '../servicios/veterinario-servicio';
import { DueñoServicio} from '../servicios/dueñoservicio';


@Injectable({
  providedIn: 'root'
})
export class AuthveterinarioGuard implements CanActivate {
  constructor(private ds:DueñoServicio,private vs:VeterinarioServicio, private router:Router){}
  canActivate(){

    if(this.vs.getVeterinario() != null)
       return true;
    else{
      if(this.ds.getDueño() != null){
        this.router.navigate(['duenio'])
        return false;
      } 
      this.router.navigate(['home']) 
       return false;
    }
  }
  
}
