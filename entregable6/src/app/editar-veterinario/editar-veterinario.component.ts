import { Component, OnInit } from '@angular/core';
import { VeterinarioServicio} from '../servicios/veterinario-servicio'
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Veterinario } from '../modelo/veterinario';

@Component({
  selector: 'app-editar-veterinario',
  providers:[VeterinarioServicio],
  templateUrl: './editar-veterinario.component.html',
  styleUrls: ['./editar-veterinario.component.css']
})
export class EditarVeterinarioComponent implements OnInit {
  form: FormGroup;
  veterinario:String;   
  public nombre: String;

  constructor(private router:Router,private fb: FormBuilder,private vs:VeterinarioServicio) { }
   
  ngOnInit() {
    this.veterinario=this.vs.getVeterinario();
    this.form=this.fb.group({ 
      email:this.veterinario["email"],
      password:this.veterinario["password"],
      nombre:this.veterinario["nombre"],
      apellido:this.veterinario["apellido"],
      telefono:this.veterinario["telefono"],
      domicilio_clinica:this.veterinario["domicilio_clinica"]
    })
    console.log(this.veterinario);
    
    this.nombre=this.veterinario["nombre"];
  }


  editarVeterinario(form){
    var v = new Veterinario();
    v.nombre=form.nombre;
    v.apellido=form.apellido;
    v.password=form.password;
    v.email=form.email;
    v.password=form.password;
    v.telefono=form.telefono;
    v.domicilio_clinica=form.domicilio_clinica;
    this.vs.editarVeterinario(v,this.veterinario['idVeterinario']).subscribe(respuesta=>{this.vs.setVeterinario(respuesta), this.veterinario=this.vs.getVeterinario()
      ,this.nombre=this.veterinario["nombre"],this.router.navigate(['veterinario'])});
  }

  logout(){
    this.vs.logoutVeterinario();
    this.router.navigate(['home'])
  }



}
