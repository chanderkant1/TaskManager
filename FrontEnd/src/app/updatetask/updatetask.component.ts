import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatetask',
  imports: [CommonModule, FormsModule],
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.css'
})
export class UpdatetaskComponent {
  tid!: number;
  tobj: Task = new Task();
  username!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskservice: TaskService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
        console.log("username: "+this.username);
      } else {
        console.log("username is not coming");
      }
    });
  
    
    this.tid = this.route.snapshot.params['id'];
    console.log("Task id:", this.tid);

    this.taskservice.getTaskById(this.tid).subscribe(
      data => {
        console.log("Received Task:", data);
        this.tobj = data;
      }
    );
  }

  onSubmit() {
    this.taskservice.updatetask(this.tid, this.tobj).subscribe(
      data => {
        if (data) {
          console.log("Task updated");
          this.username = this.tobj.username;
          this.router.navigate(['/view'], { queryParams: { username: this.username } });
        }
      }
    );
  }
}
