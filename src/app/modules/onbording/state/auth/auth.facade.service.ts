import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthSelectors from './auth.selectors';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/onbording/services/auth.service';

@Injectable()
export class AuthFacadeService {
    getAuthResult$ = this.store.select(AuthSelectors.getAuthResult);

    
    constructor(private store : Store, private authService : AuthService, private router : Router) {
        
    }

    loginUser(email: string,
        password : string){
        this.store.dispatch(
            AuthActions.Login({email, password})
        )
    }

    onLoginSuccess(response : any){
        if ( response &&
            response.IdToken &&
            response.RefreshToken
        ) {
            this.authService.setTokens(response);
            localStorage.setItem(
            'refreshToken',
            response.RefreshToken
            );
            this.authService.startTokenUpdateTimer((response.ExpiresIn / 60) - 5);
            this.router.navigateByUrl('/customer/dashboard');;
        }
    }

}