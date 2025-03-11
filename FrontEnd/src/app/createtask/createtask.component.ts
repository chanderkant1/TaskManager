import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'createtask',
  imports: [CommonModule, FormsModule],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.css'
})
export class CreatetaskComponent {
  tobj: Task = new Task();
  successMessage: string = '';
  username!: string;

  constructor(private taskservice: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
        console.log("username:", this.username);
      } else {
        console.log("username not coming");
      }
    });
  }

  storeValue() {
    if (!this.username) {
      console.log("No such user exists");
      return;
    }
    
    this.taskservice.createTask(this.tobj).subscribe(
      data => {
        console.log("task created:", data);
        this.successMessage = 'success';
        this.tobj = new Task();
        this.router.navigate(['/view'], { queryParams: { username: this.username } });
      },
      
    );
  }
}