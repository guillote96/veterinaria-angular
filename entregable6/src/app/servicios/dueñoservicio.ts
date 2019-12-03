import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dueño } from '../modelo/dueño';
import { Observable } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';





@Injectable()
export class DueñoServicio {

    dueñoUrl="http://localhost:1085/ttps-spring/login/duenio";

    constructor(private http: HttpClient) { }


    loginDueño () {
        var due= new Dueño();
        due.email='guille@guille.com';
        due.password='1234';
        console.log(JSON.stringify(due));
        //return this.http.post<Boolean>(this.dueñoUrl, due);
             
     }

     obtenerTodosLosDueños():Observable<Dueño[]>{

         return this.http.get<Dueño[]>("http://localhost:1085/ttps-spring/duenio")

     }

}
