import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  public canActivate(): boolean {
    if (this.auth.IsAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }

    return false;
  }

}
