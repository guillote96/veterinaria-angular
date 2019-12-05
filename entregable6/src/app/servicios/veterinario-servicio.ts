import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import {Veterinario} from '../modelo/veterinario'
@Injectable()
export class VeterinarioServicio {

    constructor(private http: HttpClient) { }
     
    veterinarioUrl="http://localhost:1085/ttps-spring/login/veterinario";

    loginVeterinario (email, password) {
        var vet= new Veterinario();
        vet.email=email;
        vet.password=password;
        let json = JSON.stringify(vet);
        let headers= new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<Boolean>(this.veterinarioUrl,json,{headers:headers});
             
     }

     setVeterinario(unVeterinario){
         let user= JSON.stringify(unVeterinario);
         localStorage.setItem("user",user);
     }

     getVeterinario(){
         let user= localStorage.getItem("user");
         if(isNullOrUndefined(user)){
             return user;
         }else{
             return null;
         }
     }

     setToken(token){
        localStorage.setItem("token",token);
     }
     getToke(){
         return localStorage.getItem("token");
     }

     logoutVeterinario(){
         localStorage.removeItem("token");
         localStorage.removeItem("user");

     }
}
