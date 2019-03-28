import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit
 {
  myform : FormGroup;
  msg :string;
  constructor(private _router:Router) {
    this.myform = new FormGroup({
      username : new FormControl(" ",[Validators.required]),
      password : new FormControl(" ",[Validators.required])
    });

   }
    authenticate()
    {
      if((this.myform.value.username = "radha") && (this.myform.value.password = "hello"))
      {
      sessionStorage.setItem("uname",this.myform.value.username);
      sessionStorage.setItem("token","radha123");
      this._router.navigate(['./dasboard']);  
      }
      else
      {
        this.msg = "invalid name OR password"
      }
    }

  ngOnInit() {
  }

}
