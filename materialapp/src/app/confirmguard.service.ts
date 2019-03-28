import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import { LoginComponent } from "./login.component"

@Injectable({
  providedIn: 'root'
})
export class ConfirmguardService implements CanDeactivate <LoginComponent>
{
    canDeactivate(lc:LoginComponent)
    {
      if(lc.myform.valid){
        return true;
      }
      else
      {
        if(window.confirm("do you want to discard changes ?"))
        {
          return true;
        }
        else
        {
          return false;
        }
      }
    }
  constructor() { }
}
