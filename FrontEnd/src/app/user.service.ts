import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient : HttpClient) { }
  baseUrl = "http://localhost:8090/users"
  loggedIn = false

  verify(userobj : User):Observable<Object>{
    return this.httpclient.post<boolean>(this.baseUrl+"/login",userobj);
  }
}
