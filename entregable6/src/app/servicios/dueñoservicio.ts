import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Dueño } from '../modelo/dueño';
import { Observable } from 'rxjs';






@Injectable()
export class DueñoServicio {

    dueñoUrl="http://localhost:1085/ttps-spring/login/duenio";

    constructor(private http: HttpClient) { }


    loginDueño () {
        var due= new Dueño();
        due.email="guille@guille.com";
        due.password="124";
        let json = JSON.stringify(due);
        let headers= new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<Boolean>(this.dueñoUrl,json,{headers:headers});
             
     }

     obtenerTodosLosDueños(){

         return this.http.get<Dueño[]>("http://localhost:1085/ttps-spring/duenio");

     }

}
