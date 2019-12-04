import { Component, OnInit } from '@angular/core';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { Dueño } from '../modelo/dueño';

@Component({
  selector: 'app-duenio',
  providers: [DueñoServicio],
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.css']
})
export class DuenioComponent implements OnInit {

   duenios: Dueño[];
   loginOk: Boolean;

   constructor(private dueñoServicio: DueñoServicio) { 
     //this.obtenerTodosLosDuenios();
     //this.login();
   }


  ngOnInit() {

  }
  login(){

    this.dueñoServicio.loginDueño().subscribe(resultado=> {this.loginOk=resultado});
  }

  obtenerTodosLosDuenios(){
      this.dueñoServicio.obtenerTodosLosDueños().subscribe(resultado=> {this.duenios=resultado});
      
  }

}
