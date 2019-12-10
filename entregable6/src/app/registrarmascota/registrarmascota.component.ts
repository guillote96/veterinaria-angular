import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
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
  vacio:Boolean=false;
  constructor(private router:Router,private fb: FormBuilder,private mascotaServicio: MascotaServicio,private ds:DueñoServicio) { }

  ngOnInit() {
   this.form= this.fb.group({ 
     nombre:new FormControl('', Validators.required),
     fecha_nac:new FormControl('', Validators.required),
     especie:new FormControl('', Validators.required),
     raza:new FormControl('', Validators.required),
     sexo:new FormControl('', Validators.required),
     color:new FormControl('', Validators.required),
     senias_part:new FormControl('', Validators.required),
     idVeterinario:new FormControl('', Validators.required)
   })
   this.duenio=this.ds.getDueño();
   this.nombre=this.duenio["nombre"];
 }

 agregarMascota(form){
  if (this.form.invalid){
    this.vacio=true;
    return false;
  }
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

  logout(){
    this.ds.logoutDueño();
    this.router.navigate(['home'])
  }

}
