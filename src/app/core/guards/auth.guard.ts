import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class authGuard implements CanActivate {
  constructor(private route: Router) {}

  canActivate() {
    let isConnected = localStorage.getItem('connected');
    if (isConnected === 'true') {
      return true;
    } else {
      this.route.navigate(['/auth/login']);
      return false;
    }
  }
}
