import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { VeterinarioServicio } from '../servicios/veterinario-servicio';

@Component({
  selector: 'app-login',
  providers: [DueñoServicio,VeterinarioServicio],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private dueñoServicio: DueñoServicio, 
    private veterinarioServicio:VeterinarioServicio) { }

  ngOnInit() {
   this.form= this.fb.group({ 
     email:'',
     password:'',
     tipo:''
   })
 }

 login(form){
   if(form.tipo == 'duenio'){
       this.dueñoServicio.loginDueño(form.email,form.password).subscribe(resultado=> {this.dueñoServicio.setDueño(resultado)}
        , error => {console.error()});
    } else{
      this.veterinarioServicio.loginVeterinario(form.email,form.password).subscribe(resultado=> {this.veterinarioServicio.setVeterinario(resultado)}
      , error => {console.error()});
    }
 }

}
