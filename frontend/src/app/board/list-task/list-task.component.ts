import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  taskData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
    private _taskService: TaskService,
    private _snackBar: MatSnackBar
  ) {
    //this es para usar archivos o variables internas o locales
    this.taskData = {};
  }

  ngOnInit(): void {
    this._taskService.listTask().subscribe({
      //la v tiene la lista guardada
      next: (v) => {
        this.taskData = v.taskList;
      },
      //la e tiene el error guardado
      error: (e) => {
        this.message = e.error.message;
        this.openSnackBarError();
      },
    });
  }
  updateTask(task: any, status: string) {}
  deleteTask(task: any) {}

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['stylesnackBarSuccesfull'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarError'],
    });
  }
}
