import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient:HttpClient) { }
  baseUrl = "http://localhost:8090/task"

  createTask( tsk: Task):Observable<Object>{
    return this.httpClient.post(this.baseUrl+"/inserttask",tsk);
  }

  getTaskList(uname : string):Observable<Task[]>
  {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/retrievebyname/${uname}`)
  }
  deleteTask(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
  
  updatetask(id: number, task: Task):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,task);
  }

  getTaskById(id:number):Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseUrl}/retreivebyid/${id}`);
  }
}
