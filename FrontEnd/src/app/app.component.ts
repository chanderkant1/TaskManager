import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ViewComponent,LoginComponent,HeaderComponent,CreatetaskComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  siblingMessage!: string
  title = 'FrontEnd';
  showMessage(message : string){
    this.siblingMessage = message;
  }
}
