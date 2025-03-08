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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskservice: TaskService
  ) {}

  ngOnInit() {
    this.tid = this.route.snapshot.params['id'];
    console.log("Task ID: " + this.tid);

    this.taskservice.getTaskById(this.tid).subscribe(
      data => {
        console.log("Received Task:", data);
        this.tobj = data;
      },
      error => console.error("Error fetching task:", error)
    );
  }

  onSubmit() {
    this.taskservice.updatetask(this.tid, this.tobj).subscribe(
      data => {
        if (data) {
          console.log("Task updated successfully");
          this.router.navigate(['/view']);
        }
      },
      error => console.error("Error updating task:", error)
    );
  }
}
