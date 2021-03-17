import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {PrivateProfileComponent}  from './components/private-profile/private-profile.component'
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthGuard} from './auth.guard'


const routes: Routes = [

  {
    path: '',
    redirectTo: '/signin',  //Redireccionar 
    pathMatch: 'full'
  },
{  
  path: 'signin',
  component: SigninComponent

},
{  
  path: 'signup',
  component: SignupComponent

},
{  
  path: 'profile',
  component: PrivateProfileComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
