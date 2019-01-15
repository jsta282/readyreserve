import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private auth: AuthService, private http: Http) { }



  ngOnInit(): void {
    this.auth.HandleWindowCallback();

    if (this.auth.IsAuthenticated()) {
      console.log('ngOnInit, authenticated, redirect to /home/welcome');
      this.router.navigateByUrl('/home');
    }
  }

  OnSubmit(form: NgForm): void {
    if (this.auth.IsAuthenticated()) {
      console.log('OnSubmit, authenticated, redirect to /home/welcome');
      this.router.navigateByUrl('/home');
    } else {
      console.log('OnSubmit, not authenticated, this.auth.Login()');
      this.auth.Login();
    }
  }
}
