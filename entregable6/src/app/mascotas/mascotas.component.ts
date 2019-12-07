import { Component, OnInit } from '@angular/core';
import { DueñoServicio } from '../servicios/dueñoservicio';
import { MascotaServicio } from '../servicios/mascota-servicio';
import { Mascota } from '../modelo/mascota';


@Component({
  selector: 'app-mascotas',
  providers: [DueñoServicio,MascotaServicio],
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  duenio:String;   
  public nombre: String;
  public mascotas:Mascota[];


constructor(private ds:DueñoServicio,private ms:MascotaServicio){}

ngOnInit(){
   this.duenio=this.ds.getDueño();
   this.nombre=this.duenio["nombre"];
   this.ms.listadoMascotaDeDuenio(this.duenio["idDuenio"]).subscribe(resultados=> {this.mascotas=resultados})



}




}
