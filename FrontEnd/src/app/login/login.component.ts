import { Component, Injectable, Output, output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn:'root'
})
export class LoginComponent {
  user : User = new User();
  loggedIn !: boolean
  @Output() sendusername = new EventEmitter<string>();

  constructor(private userservice : UserService , private router : Router){

  }
  ngONInit(){ }
  verify(){
    this.userservice.verify(this.user).subscribe(data=>{
      console.log("data")
      if (data) {
        localStorage.setItem("user",this.user.username)
        this.sendusername.emit(this.user.username);
        console.log("verified");
        this.router.navigate(['/view'], { queryParams: { username: this.user.username } });
      }
      else{
        console.error("invalid USER")
      }
    })
  }
}
