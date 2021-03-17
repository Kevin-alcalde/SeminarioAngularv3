import { Component, OnInit } from '@angular/core';
import  {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'pruebaForm',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {


  constructor() { }


  miFormulario = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      userpassword: new FormControl('', Validators.required)

    }
  )

  ngOnInit(): void {
  }

}
