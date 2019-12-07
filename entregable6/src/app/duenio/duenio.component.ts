import { Component, OnInit } from '@angular/core';
import { Dueño } from '../modelo/dueño';
import { DueñoServicio } from '../servicios/dueñoservicio';
import {Router} from '@angular/router';



@Component({
  selector: 'app-duenio',
  providers:[DueñoServicio],
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.css']
})
export class DuenioComponent implements OnInit {
    duenio:String;
   
    public nombre: String;




  constructor(private router:Router,private ds:DueñoServicio){}

  ngOnInit(){
     this.duenio=this.ds.getDueño();
     this.nombre=this.duenio["nombre"];



  }

  misMascotas(){
    console.log("MIs mascotas funciono!!")
  }

  logout(){
    this.ds.logoutDueño();
    this.router.navigate(['home'])
  }

}
