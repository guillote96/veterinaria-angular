import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { VeterinarioServicio } from '../servicios/veterinario-servicio';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [DueñoServicio,VeterinarioServicio],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  condicion:Boolean=false;
  vacio:Boolean=false;

  constructor(private router:Router,private fb: FormBuilder,private dueñoServicio: DueñoServicio, private veterinarioServicio:VeterinarioServicio) { }

  ngOnInit() {

    this.form= this.fb.group({ 
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      tipo:new FormControl('', Validators.required)
    })

 }

 login(form){
  if (this.form.invalid){
    this.vacio=true;
    return false;
  }
   if(form.tipo == 'duenio'){
       this.dueñoServicio.loginDueño(form.email,form.password).subscribe(resultado=> {this.condicion=false;this.dueñoServicio.setDueño(resultado["usuario"]);this.dueñoServicio.setToken(resultado["token"]);this.router.navigate(['duenio']);}
        , error => {this.condicion=true});
    } else{
      this.veterinarioServicio.loginVeterinario(form.email,form.password).subscribe(resultado=> {this.condicion=false;this.veterinarioServicio.setVeterinario(resultado["usuario"]);this.dueñoServicio.setToken(resultado["token"]);this.router.navigate(['veterinario']);}
      , error => {this.condicion=true});
    }
 }

}
