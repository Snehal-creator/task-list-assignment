import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
 title = 'taskList';

  dataList:any;

  constructor(public http: HttpService) {

   }
 
  ngOnInit(){
    this.getTask();
  }

  getTask(){
    this.http.getTaskList().subscribe((res=>{
      console.log(res);
      this.dataList =res;      
    }))
  }

}
