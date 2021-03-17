import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {AuthService} from '../services/auth.service'



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authService: AuthService) { }

//añadimos en la cabecera con el token para no hacerlo manualmente
  intercept(req, next)
{const tokenizeReq=  req.clone ({
  setHeaders: {
    Authorization: `Bearer ${this.authService.getToken()}`

  }
})
return next.handle(tokenizeReq)

}
 
}
