import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(() => console.log('SUCCESS')),
      catchError((error) => {
        console.log('ERROR');
        return throwError(() => error);
      }),
    );
  }
}
