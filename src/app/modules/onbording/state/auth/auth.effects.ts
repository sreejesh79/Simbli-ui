import { Injectable } from '@angular/core';
import { Observable, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$ : Actions,
        private authService : AuthService,
        private router: Router
        ){ }

    @Effect()
    Login$: Observable<any> = this.actions$.pipe(
      ofType(AuthActions.Login),
      switchMap((payload : any) => {
        return this.authService
          .loginUser(payload.email, payload.password)
          .pipe(
            map((response: any) => {
              if (response != null && response.IdToken) {
                console.log('LogIn', response);
                this.authService
                  .fetchUser(response.AccessToken, response.IdToken)
                  .subscribe((res : any) => {
                    localStorage.setItem('user', JSON.stringify(res));
                    this.authService.setUser(res);
                  });
                return AuthActions.LoginSuccess({response : response});
              }
              else if(response != null && response.ChallengeName){
                localStorage.setItem('newuser', JSON.stringify(response));
                return AuthActions.LoginSuccess({response : response});
              } else {
                return AuthActions.LoginFailure({
                  error: 'Incorrect email and/or password.',
                });
              }
            }),
            catchError((error) => {
              console.log('LogIn', error);
              return observableOf(AuthActions.LoginFailure({ error: error }));
            })
          );
      })
    );

    
}