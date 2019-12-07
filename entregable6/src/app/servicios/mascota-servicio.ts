import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Mascota } from '../modelo/mascota';
@Injectable()
export class MascotaServicio {

    constructor(private http: HttpClient) { }


    agregarMascota(mascota:Mascota){
        var mascotaAltaUrl='http://localhost:1085/ttps-spring/mascotas';
        let json = JSON.stringify(mascota);
        let headers= new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<Boolean>(mascotaAltaUrl,json,{headers:headers});

    }

    listadoMascotaDeDuenio(idDuenio){
        var mascotaDeDuenioUrl='http://localhost:1085/ttps-spring/mascotas/duenio/';
        return this.http.get<Mascota[]>(mascotaDeDuenioUrl+idDuenio);
    }
}
