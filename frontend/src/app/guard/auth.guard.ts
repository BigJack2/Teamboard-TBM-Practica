import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})

//Activar o proteger rutas
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  //Esta funcion debe devolver un true o un false
  canActivate(): boolean {
    if (!this._userService.loggedIn()) {
      //Si no hay token en el localstorage devuelvame al login
      this._router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
