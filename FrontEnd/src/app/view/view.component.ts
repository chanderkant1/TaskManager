import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  tasks: Task[] = []; 
  @Input()
  username!: string;
  
  constructor(private taskservice: TaskService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || '';
      console.log("username from view is:", this.username);
      if (this.username) {
        this.getTaskList(this.username);
      } else {
        console.log("No username provided in query parameters.");
      }
    });
  }

  getTaskList(uname: string) {
    this.taskservice.getTaskList(uname).subscribe(
      data => {
        console.log("Received tasks:", data);
        this.tasks = data;
      }
    );
  }
  
  deleteTask(id: number) {
    this.taskservice.deleteTask(id).subscribe(data => {
      console.log(data);
      this.getTaskList(this.username);
    });
  }

  showDetails(id: number) {
    this.router.navigate(['task-details', id]);
  }

  updateTask(id: number) {
    console.log("moving to update task with id:", id, "for user:", this.username);
    this.router.navigate(['/update', id], { queryParams: { username: this.username } });
  }

  createTask() {
    if (!this.username) {
      console.error("Username is not present");
      return;
    }
    this.router.navigate(['/create'], { queryParams: { username: this.username } });
  }
}
