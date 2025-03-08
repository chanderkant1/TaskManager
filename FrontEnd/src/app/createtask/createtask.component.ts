import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { error } from 'console';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'createtask',
  imports: [FormsModule],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.css'
})
export class CreatetaskComponent {
  tobj:Task=new Task();
  successMessage: string = '';
  constructor(private taskservice:TaskService){

  }
  ngOnInit()
  {
  }
  storeValue()
  {
    
    this.taskservice.createTask(this.tobj).subscribe(data=>
    {
      console.log("Data is "+ data);
      this.successMessage = 'Task created successfully!';
        this.tobj = new Task();
    },
    error => {
      console.error(error)
    this.successMessage = 'failed to create task';
    }
    );
  }
}
