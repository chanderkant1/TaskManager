import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

export const routes: Routes = [
    {
        path:"",redirectTo: '/login' , pathMatch: 'full'
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "view", component: ViewComponent
    },
    {
        path: "header" , component: HeaderComponent
    },
    {
        path:"footer" , component:FooterComponent
    },
    {
        path:"create" , component: CreatetaskComponent,
    },
    {
        path: "update/:id", component: UpdatetaskComponent
    }
    

];
