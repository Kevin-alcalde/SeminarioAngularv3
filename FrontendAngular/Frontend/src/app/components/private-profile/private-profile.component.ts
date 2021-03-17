import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../../services/profile.service'


@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {

  secreto
  email 
  username
  constructor(private profileService: ProfileService) {}

  ngOnInit() { //apenas inicie
   this.profileService.getProfile()
   .subscribe(
     res => {
       console.log(res)
       this.secreto = res.secreto
       this.email = res.user.email
       this.username = res.user.username
     },
     err => console.log

   )



  }

}
