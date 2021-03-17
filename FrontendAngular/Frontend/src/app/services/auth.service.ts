import { importType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignupComponent } from '../components/signup/signup.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/auth'

  constructor(private http: HttpClient) { }


    signUp(user){
    //peticion
    return this.http.post<any>(this.URL + '/signup', user);
  }


  signIn(user){
    //peticion
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(){    
    
  return  !! (localStorage.getItem('token')) //devuelve un true si existe
  
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
  


}

