import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { MascotaServicio } from '../servicios/mascota-servicio';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { Mascota } from '../modelo/mascota';
import {Router} from '@angular/router';
import { delay } from 'q';




@Component({
  selector: 'app-registrarmascota',
  providers: [MascotaServicio,DueñoServicio],
  templateUrl: './registrarmascota.component.html',
  styleUrls: ['./registrarmascota.component.css']
})
export class RegistrarmascotaComponent implements OnInit {
  form: FormGroup;
  duenio:String;   
  public nombre: String;
  public mascotas:Mascota[];
  constructor(private router:Router,private fb: FormBuilder,private mascotaServicio: MascotaServicio,private ds:DueñoServicio) { }

  ngOnInit() {
   this.form= this.fb.group({ 
     nombre:'',
     fecha_nac:'',
     especie:'',
     raza:'',
     sexo:'',
     color:'',
     senias_part:'',
     idVeterinario:''
   })
   this.duenio=this.ds.getDueño();
   this.nombre=this.duenio["nombre"];
 }

 agregarMascota(form){
   var mascota= new Mascota();
   mascota.nombre=form.nombre;
   mascota.fecha_nac=form.fecha_nac;
   mascota.especie=form.especie;
   mascota.raza=form.raza;
   mascota.sexo=form.sexo;
   mascota.color=form.color;
   mascota.senias_part=form.senias_part;
   mascota.idVeterinario=form.idVeterinario;
   mascota.idDuenio=this.duenio["idDuenio"]; // alta de mascota para determinado dueño hasta armar session 
   
   console.log(JSON.stringify(mascota));
   this.mascotaServicio.agregarMascota(mascota).subscribe(respuesta=>{this.router.navigate(['mascotas'])});
  }

}
