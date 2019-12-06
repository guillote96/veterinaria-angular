import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Dueño } from '../modelo/dueño';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { DuenioComponent } from '../duenio/duenio.component';






@Injectable()
export class DueñoServicio {

    dueñoUrl="http://localhost:1085/ttps-spring/login/duenio";

    constructor(private http: HttpClient) { }


    loginDueño (email, password) {
        var due= new Dueño();
        due.email=email;
        due.password=password;
        let json = JSON.stringify(due);
        let headers= new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<Boolean>(this.dueñoUrl,json,{headers:headers});
             
     }

     setDueño(unDueño){
         let user= JSON.stringify(unDueño);
         localStorage.setItem("user",user);
     }

     getDueño(){
         var user= localStorage.getItem("user");

         if(isNullOrUndefined(user)){
             return null;
         }else{
             
            return JSON.parse(user);
             
         }
     }

     setToken(token){
        localStorage.setItem("token",token);
     }
     getToke(){
         return localStorage.getItem("token");
     }

     logoutDueño(){
         localStorage.removeItem("token");
         localStorage.removeItem("user");

     }

     obtenerTodosLosDueños(){

         return this.http.get<Dueño[]>("http://localhost:1085/ttps-spring/duenio");

     }

     agregarDuenio(duenio){
        var url='http://localhost:1085/ttps-spring/registrar/duenio'
        let json = JSON.stringify(duenio);
        let headers= new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<Boolean>(url,json,{headers:headers});

     }

}
