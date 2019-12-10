import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { DueñoServicio} from '../servicios/dueñoservicio';
import { VeterinarioServicio} from '../servicios/veterinario-servicio'


@Injectable({
  providedIn: 'root'
})
export class AuthduenioGuard implements CanActivate {

  constructor(private vs:VeterinarioServicio,private ds:DueñoServicio, private router:Router){}
  canActivate(){

    if(this.ds.getDueño() != null)
       return true;
    else{
      if(this.vs.getVeterinario() != null){
         this.router.navigate(['veterinario'])
         return false;
       }  
       this.router.navigate(['home'])
       return false;
    }
  }
  
}
