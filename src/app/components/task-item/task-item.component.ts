import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
@Input() task: Task;
@Output() onDeletebtn = new EventEmitter();
@Output() onToggleReminder = new EventEmitter();
faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeletebtn.emit();
  }

  onToggle(){
    this.onToggleReminder.emit();
  }
}
