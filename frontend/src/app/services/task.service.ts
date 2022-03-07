import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private env: string;
  //Dentro de los parentesis se ponen los services y demas librerias
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  //metodo de crear tareas
  saveTask(task: any) {
    return this._http.post<any>(this.env + 'task/saveTask', task);
  }

  //no recibe nada por eso no lleva task en los parametros es decir los parentesis de listtask
  listTask() {
    return this._http.get<any>(this.env + 'task/listTask');
  }
}
