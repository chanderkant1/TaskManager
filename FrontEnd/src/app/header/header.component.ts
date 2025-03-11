import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:[CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username!: string;
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || '';
      console.log("username in header:" + this.username);
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path], { queryParams: { username: this.username } });
  }
}
