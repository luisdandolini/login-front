import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment.develop';
import { Inject } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');
    request = request.clone({ url: environment.apiUrl + request.url });

    if (token) {
      request.clone({ setHeaders: { ['Bearer ']: token } });
    }

    return next.handle(request).pipe(
      catchError((error: HttpResponse<any>) => {
        if (error.status === 401) {
          this.authService.logout('auth');
        }
        return throwError(() => error);
      })
    );
  }
}
