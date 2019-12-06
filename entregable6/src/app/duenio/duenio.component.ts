import { Component, OnInit } from '@angular/core';
import { Dueño } from '../modelo/dueño';
import { DueñoServicio } from '../servicios/dueñoservicio';



@Component({
  selector: 'app-duenio',
  providers:[DueñoServicio],
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.css']
})
export class DuenioComponent implements OnInit {
    duenio:String;
   
    public nombre: String;




  constructor(private ds:DueñoServicio){}

  ngOnInit(){
     this.duenio=this.ds.getDueño();
     this.nombre=this.duenio["nombre"];



  }

}
