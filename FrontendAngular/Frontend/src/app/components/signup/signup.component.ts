import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    password: '',
    username: '',
    email: '',
  }

  constructor(private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

signUp() {
this.authService.signUp(this.user)
.subscribe(
  res => {
    console.log(res)
    console.log('se ha podido hacer');
    localStorage.setItem('token', res.token);
    this.router.navigate(['/profile']);
  },
  err => {
    console.log(err)
    
  }
)
}
}
