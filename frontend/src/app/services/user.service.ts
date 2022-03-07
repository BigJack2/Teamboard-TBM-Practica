import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
  //Dentro de los parentesis se ponen los services y demas librerias
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerUser(user: any) {
    //this.env es http://localhost:3001/api/
    //la completo con la concatenacion
    //de esta mnera es como si usaramos postman
    //any por si nos devuelve cualquier cosa ya sea un json o un mensaje de error
    return this._http.post<any>(this.env + 'user/register', user);
  }

  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }

  //Metodo para saber si estoy logueado
  loggedIn() {
    //Si la respuesta es un true o un false se usa esta forma
    //Solo hay una respuesta  devuelvame lo que tenga sea true o false
    return !!localStorage.getItem('token');
  }

  getToken() {
    //obtenemos el token
    return localStorage.getItem('token');
  }

  logout() {
    //Eliminamos el token para eliminar el login
    localStorage.removeItem('token');
  }
}
