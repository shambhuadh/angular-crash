import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { ElementRef } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  showAddTask;
  subscription: Subscription;

  constructor(private taskService: TaskService, private elementRef: ElementRef, private uiService: UiService) { }

  ngOnInit(): void {
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
      this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
      this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = <boolean>value);
  }

  onDeleteTask(task){
    this.taskService.deleteTask(task).subscribe();
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  toggleReminder(task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task){
    this.taskService.addTask(task).subscribe();
    this.tasks.push(task);
    this.uiService.onAddToggle();
  }

  onAddTaskToggle(){
    this.uiService.onAddToggle();
  }
}
