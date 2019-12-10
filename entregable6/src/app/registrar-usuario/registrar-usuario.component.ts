import { Component, OnInit } from '@angular/core';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { VeterinarioServicio } from '../servicios/veterinario-servicio';
import { FormsModule, FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { Dueño } from '../modelo/dueño';
import { Veterinario } from '../modelo/veterinario';
import { error } from 'util';

@Component({
  selector: 'app-registrar-usuario',
  providers:[DueñoServicio,VeterinarioServicio],
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  form: FormGroup;
  condicion:Boolean=false;
  exito:Boolean=false;
  vacio:Boolean=false;
  form2:FormGroup;

  constructor(private fb: FormBuilder,private duenioServicio:DueñoServicio,private veterinarioServicio:VeterinarioServicio) { }

  ngOnInit() {
   this.form= this.fb.group({ 
     email:new FormControl('', Validators.required),
     password:new FormControl('', Validators.required),
     nombre:new FormControl('', Validators.required),
     apellido:new FormControl('', Validators.required),
     telefono:new FormControl("", Validators.required),
   });
   this.form2=this.fb.group({
      email2:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      nombre:new FormControl('', Validators.required),
      apellido:new FormControl('', Validators.required),
      telefono:new FormControl("", Validators.required),
      domicilio_clinica:new FormControl("", Validators.required),
    });

 }
 registrarDuenio(form){
  if (this.form.invalid){
    this.vacio=true;
    return false;
  }
   var duenio = new Dueño();
   duenio.nombre=form.nombre;
   duenio.apellido=form.apellido;
   duenio.email=form.email;
   duenio.password=form.password;
   duenio.telefono=form.telefono;
   console.log(JSON.stringify(duenio));
   this.duenioServicio.agregarDuenio(duenio).subscribe(respuesta=>{this.condicion=false,this.exito=true},
     error => {this.condicion=true});
 }
 registrarVeterinario(form){
  if (this.form2.invalid){
    this.vacio=true;
    return false;
  }

  var veterinario = new Veterinario();
  veterinario.nombre=form.nombre;
  veterinario.apellido=form.apellido;
  veterinario.email=form.email2;
  veterinario.password=form.password;
  veterinario.telefono=form.telefono;
  veterinario.domicilio_clinica=form.domicilio_clinica;
  console.log(JSON.stringify(veterinario));
  this.veterinarioServicio.agregarVeterinario(veterinario).subscribe(respuesta=>{this.condicion=false,this.exito=true},
    error => {this.condicion=true});
}


}
