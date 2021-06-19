import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  flg_tasks = true;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
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
  }

}
