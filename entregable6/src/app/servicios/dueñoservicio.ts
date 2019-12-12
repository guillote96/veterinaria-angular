import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Dueño } from '../modelo/dueño';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { DuenioComponent } from '../duenio/duenio.component';






@Injectable( {providedIn: 'root'})
export class DueñoServicio {

    dueñoUrl="http://localhost:1085/ttps-spring/login/duenio";

    constructor(private http: HttpClient) { }


    loginDueño (email, password) {
        var due= new Dueño();
        due.email=email;
        due.password=password;
        let json = JSON.stringify(due);
        let headers= new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');
        return this.http.post<Boolean>(this.dueñoUrl,json,{headers:headers});
             
     }

     setDueño(unDueño){
         let user= JSON.stringify(unDueño);
         localStorage.setItem("duenio",user);
     }

     getDueño(){
         var user= localStorage.getItem("duenio");

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
         localStorage.removeItem("duenio");

     }

     obtenerTodosLosDueños(){

         return this.http.get<Dueño[]>("http://localhost:1085/ttps-spring/duenio");

     }

     agregarDuenio(duenio){
        var url='http://localhost:1085/ttps-spring/registrar/duenio'
        let json = JSON.stringify(duenio);
        let headers= new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');
        return this.http.post<Boolean>(url,json,{headers:headers});

     }

     traerDuenio(id){
        let headers= new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');

        return this.http.get<Dueño>("http://localhost:1085/ttps-spring/duenio/"+id);
     }

     editarDuenio(duenio,id){
        var url='http://localhost:1085/ttps-spring/editar/duenio/'
        let json = JSON.stringify(duenio);
        let headers= new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*').set('token',this.getToke());
        return this.http.put<Boolean>(url+id,json,{headers:headers});

     }

}
