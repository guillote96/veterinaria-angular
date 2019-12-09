import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VeterinarioServicio } from '../servicios/veterinario-servicio';

@Component({
  selector: 'app-veterinario',
  providers:[VeterinarioServicio],
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  veterinario:String;
   
  public nombre: String;

  constructor(private router:Router,private vs:VeterinarioServicio) { }

  ngOnInit() {
    this.veterinario=this.vs.getVeterinario();
    this.nombre=this.veterinario["nombre"];
  }

  logout(){
    this.vs.logoutVeterinario();
    this.router.navigate(['home'])
  }

}
