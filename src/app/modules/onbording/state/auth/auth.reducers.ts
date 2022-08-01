import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
    loginResponse: any | null;
    errorMessage: string | null;
}

const initialValues = {
    isAuthenticated: false,
    loginResponse: null,
    errorMessage: null,
}

// export const authAdapter = createEntityAdapter<LoginResponse>({
//     selectId : (storeColl : StoreData) => storeColl.selectId
// })

export const initialAuthState : AuthState = {
    ...initialValues
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.LoginSuccess, (state, action) => {
        return {
            ...state,
            isAuthenticated: true,
            loginResponse: action.response,
        }
    }),    
    on(AuthActions.LoginFailure, (state, action) => {
        return {
            ...state,
            storeCollection : [],
            errorMessage: action.error,
        }
    })



);