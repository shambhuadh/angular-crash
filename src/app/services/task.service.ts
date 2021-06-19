import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }

  updateTaskReminder(task): Observable<Task>{
    const putUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(putUrl, task, httpOptions);
  }

  addTask(task): Observable<Task> {

    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
