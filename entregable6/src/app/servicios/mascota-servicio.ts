import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Mascota } from '../modelo/mascota';
import { DueñoServicio } from './dueñoservicio';
@Injectable(  {providedIn: 'root'})
export class MascotaServicio {

    constructor(private http: HttpClient, private ds:DueñoServicio) { }


    agregarMascota(mascota:Mascota){
        var mascotaAltaUrl='http://localhost:1085/ttps-spring/mascotas';
        let json = JSON.stringify(mascota);
        let headers= new HttpHeaders().set('Content-Type','application/json').set('token',this.ds.getToke());
        return this.http.post<Boolean>(mascotaAltaUrl,json,{headers:headers});

    }

    listadoMascotaDeDuenio(idDuenio){
        let headers= new HttpHeaders().set('Content-Type','application/json').set('token',this.ds.getToke());

        var mascotaDeDuenioUrl='http://localhost:1085/ttps-spring/mascotas/duenio/';
        return this.http.get<Mascota[]>(mascotaDeDuenioUrl+idDuenio,{headers:headers});
    }
}
