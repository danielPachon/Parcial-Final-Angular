import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const expectedRole = next.data.expectedRole;

    if (this.authService.isAuthenticated()) {
      if (expectedRole) {
        if (this.authService.hasRole(expectedRole)) {
          return true;
        } else {
          return this.router.createUrlTree(['/not-authorized']);
        }
      } else {
        return true;
      }
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
