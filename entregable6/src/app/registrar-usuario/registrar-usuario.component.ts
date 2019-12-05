import { Component, OnInit } from '@angular/core';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { VeterinarioServicio } from '../servicios/veterinario-servicio';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { Dueño } from '../modelo/dueño';
import { Veterinario } from '../modelo/veterinario';

@Component({
  selector: 'app-registrar-usuario',
  providers:[DueñoServicio,VeterinarioServicio],
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,private duenioServicio:DueñoServicio,private veterinarioServicio:VeterinarioServicio) { }

  ngOnInit() {
   this.form= this.fb.group({ 
     email:'',
     password:'',
     nombre:'',
     apellido:'',
     telefono:'',
     domicilio_clinica:''
   })
 }
 registrarDuenio(form){
   var duenio = new Dueño();
   duenio.nombre=form.nombre;
   duenio.apellido=form.apellido;
   duenio.email=form.email;
   duenio.password=form.password;
   duenio.telefono=form.telefono;
   console.log(JSON.stringify(duenio));
   this.duenioServicio.agregarDuenio(duenio).subscribe(respuesta=>{console.log(respuesta)});
 }
 registrarVeterinario(form){
  var veterinario = new Veterinario();
  veterinario.nombre=form.nombre;
  veterinario.apellido=form.apellido;
  veterinario.email=form.email;
  veterinario.password=form.password;
  veterinario.telefono=form.telefono;
  veterinario.domicilio_clinica=form.domicilio_clinica;
  console.log(JSON.stringify(veterinario));
  this.veterinarioServicio.agregarVeterinario(veterinario).subscribe(respuesta=>{console.log(respuesta)});
}


}
