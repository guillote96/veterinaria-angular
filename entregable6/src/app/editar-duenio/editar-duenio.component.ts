import { Component, OnInit } from '@angular/core';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { FormsModule, FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
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
  vacio:Boolean=false;
  existe:Boolean=false;

  constructor(private router:Router,private fb: FormBuilder,private ds:DueñoServicio
    ) { }

  ngOnInit() {
    this.duenio=this.ds.getDueño();
    this.form=this.fb.group({ 
      email:new FormControl(this.duenio["email"], Validators.required),
      password:new FormControl(this.duenio["password"], Validators.required),
      nombre:new FormControl(this.duenio["nombre"], Validators.required),
      apellido:new FormControl(this.duenio["apellido"], Validators.required),
      telefono:new FormControl(this.duenio["telefono"], Validators.required)
    })
    
    this.nombre=this.duenio["nombre"];
  }

  logout(){
    this.ds.logoutDueño();
    this.router.navigate(['home'])
  }

  editarDuenio(form){
    if (this.form.invalid){
      this.vacio=true;
      return false;
    }
    var d = new Dueño();
    d.nombre=form.nombre;
    d.apellido=form.apellido;
    d.password=form.password;
    d.email=form.email;
    d.password=form.password;
    d.telefono=form.telefono;
    this.ds.editarDuenio(d,this.duenio['idDuenio']).subscribe(respuesta=>{this.ds.setDueño(respuesta), this.duenio=this.ds.getDueño()
      ,this.nombre=this.duenio["nombre"],this.router.navigate(['duenio'])},
      
      error =>{this.existe=true;});
  }

}
