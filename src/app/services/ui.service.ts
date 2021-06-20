import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  showAddTask: boolean = false;
  subject = new Subject;

  constructor() { }

  onAddToggle(){
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(){
    return this.subject.asObservable();
  }
}
