import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UpdatetaskComponent } from '../updatetask/updatetask.component';

@Component({
  selector: 'app-view',
  imports: [HeaderComponent,CommonModule,UpdatetaskComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  tasks: Task[] = []; 
  @Input()
  username !: string ;
  constructor(private taskservice:TaskService , private router:Router,private route : ActivatedRoute){

  }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      if (this.username) {
        this.getTaskList(this.username);
      }
    });
  }

  getTaskList(uname: string) {
    this.taskservice.getTaskList(uname).subscribe(
      data => {
        console.log("Received tasks:", data);
        this.tasks = data;
      },
      error => console.error("not getting tasks:", error)
    );
  }
  
  deleteTask(id:number)
  {
    this.taskservice.deleteTask(id).subscribe(data=>
    {
      console.log(data);
      this.getTaskList(this.username);
    }
    )
  }
  showDetails(id:number){
    this.router.navigate(['task-details',id]);
  }

  updateTask(id: number) {
    console.log("Navigating to update task with ID:", id);
    this.router.navigateByUrl(`/update/${id}`);
  }
}
