import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  addUser() {
    this.router.navigateByUrl('/adduser');
    console.log("clicked on the user thing")
  }

  logOut() {
    this.auth.Logout();
    console.log("clicked on the logout thing")
  }

  goHome() {
    this.router.navigateByUrl('/home');
    console.log("clicked on the home thing")
  }

  goAccount() {
    this.router.navigateByUrl('/account');
    console.log("you wanna see some account stuff hey? ;)");
  }

}
