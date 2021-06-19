import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  flg: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('Btn clicked');
  }
}
