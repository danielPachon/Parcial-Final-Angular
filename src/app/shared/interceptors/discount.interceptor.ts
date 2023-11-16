import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DiscountInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authService.getUser();

    if (user.gender && user.gender.toLowerCase() === 'female') {
      const discountedRequest = request.clone({
        setParams: {
          discount: '30',
        },
      });

      return next.handle(discountedRequest);
    }

    return next.handle(request);
  }
}
