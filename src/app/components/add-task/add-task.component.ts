import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();
  text: string;
  day: string;
  reminder = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);
    
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
