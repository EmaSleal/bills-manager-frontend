import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                // Invocar la función handleError
                return this.handleError()(error);
            })
        );
    }

    private handleError() {
        return (error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
                // Ocurrió un error del lado del cliente o de la red.
                console.error('An error occurred:', error.error.message);
            } else {
                // El backend devolvió un código de estado de error.
                console.error(
                    `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
                );
            }
            return throwError(error);
        };
    }
}    
