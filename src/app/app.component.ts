import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName ='Mycie podłogi'; 
  taskDate ='';
  field: string; 

  
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done:false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done:false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-02-04',
      done: true,
    },
    {
      name: 'Dentysta',
      deadline: '2020-03-13',
      done:false,
    },
    {
      name: 'Bieg na 5km',
      deadline:'2020-01-03',
      done:false,
    },
  ];



  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,

    };
     this.tasks.push(task);
     this.sortTasks();
  }
 
  clearTask(){

     this.tasks=[];
     this.sortTasks();
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }
   
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }    

  private sortTasks(){
     
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
    a.done === b.done? 0 : a.done? 2 : -2);


  }


}
