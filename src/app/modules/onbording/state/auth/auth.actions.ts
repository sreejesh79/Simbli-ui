import { createAction, props } from '@ngrx/store';

const AUTH : string = 'AUTH';

export const Login = createAction(`${AUTH} Login`,(payload: any = {}) => payload);
export const LoginSuccess = createAction(`${AUTH} Login Success`, 
                                                        props<{response : any}>());
export const LoginFailure = createAction(`${AUTH} Login Failure`, 
                                                        props<{error : any}>());