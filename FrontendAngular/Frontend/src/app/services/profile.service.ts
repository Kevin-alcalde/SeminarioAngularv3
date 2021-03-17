import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private URL = 'http://localhost:3000/api/auth'


  constructor(private http: HttpClient) { }

getProfile(){
 return this.http.get<any>(this.URL + '/profile');

}

}


