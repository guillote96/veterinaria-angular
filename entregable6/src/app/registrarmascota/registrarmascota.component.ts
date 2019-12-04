import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { MascotaServicio } from '../servicios/mascota-servicio';
import { Mascota } from '../modelo/mascota';

@Component({
  selector: 'app-registrarmascota',
  providers: [MascotaServicio],
  templateUrl: './registrarmascota.component.html',
  styleUrls: ['./registrarmascota.component.css']
})
export class RegistrarmascotaComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private mascotaServicio: MascotaServicio) { }

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
   mascota.idDuenio=1; // alta de mascota para determinado dueño hasta armar session 
   
   console.log(JSON.stringify(mascota));
   this.mascotaServicio.agregarMascota(mascota).subscribe(respuesta=>{console.log(respuesta)});
  }

}
