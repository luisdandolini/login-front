import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['home'])
      return false;
    }
    return true;
  }
}
