import { Component, OnInit } from '@angular/core';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Dueño } from '../modelo/dueño';


@Component({
  selector: 'app-editar-duenio',
  providers:[DueñoServicio],
  templateUrl: './editar-duenio.component.html',
  styleUrls: ['./editar-duenio.component.css']
})
export class EditarDuenioComponent implements OnInit {
  form: FormGroup;
  duenio:String;   
  public nombre: String;

  constructor(private router:Router,private fb: FormBuilder,private ds:DueñoServicio
    ) { }

  ngOnInit() {
    this.duenio=this.ds.getDueño();
    this.form=this.fb.group({ 
      email:this.duenio["email"],
      password:this.duenio["password"],
      nombre:this.duenio["nombre"],
      apellido:this.duenio["apellido"],
      telefono:this.duenio["telefono"]
    })
    
    this.nombre=this.duenio["nombre"];
  }

  logout(){
    this.ds.logoutDueño();
    this.router.navigate(['home'])
  }

  editarDuenio(form){
    var d = new Dueño();
    d.nombre=form.nombre;
    d.apellido=form.apellido;
    d.password=form.password;
    d.email=form.email;
    d.password=form.password;
    d.telefono=form.telefono;
    this.ds.editarDuenio(d,this.duenio['idDuenio']).subscribe(respuesta=>{this.ds.setDueño(respuesta), this.duenio=this.ds.getDueño()
      ,this.nombre=this.duenio["nombre"],this.router.navigate(['duenio'])});
  }

}