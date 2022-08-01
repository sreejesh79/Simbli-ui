import * as AuthReducer from "./auth.reducers";
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

const selectAuthState = createFeatureSelector<AuthReducer.AuthState>('AUTH')
// const { selectAll } = AuthReducer.authAdapter.getSelectors();

export const getAuthResult = createSelector(selectAuthState, (state) => {
    return {
        stateCollection : state
    }
})