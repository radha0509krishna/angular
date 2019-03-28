import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate
{
  canActivate () : boolean 
   
  {
    if(sessionStorage.getItem("token") == "radha123")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  constructor() { }
}
