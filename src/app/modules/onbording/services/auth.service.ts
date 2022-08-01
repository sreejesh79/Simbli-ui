import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Subscriber } from 'rxjs/internal/Subscriber';

@Injectable()
export class AuthService {
  
	private LOGIN = '';
	private USER_INFO = '';
	private FETCH_TOKEN = '';

	private Token: string = '';
	private Access_Token: string = '';
	private readonly REFRESH_TOKEN: string = 'refreshToken';
	private User : any;
  onUserUpdate : Subject<any> = new Subject();
  
  constructor(private http: HttpClient) { }

  
  loginUser(email: string, password: string){
    const data = {
      username: email,
      password: password
    }
    return this.http.post(environment.base_url + this.LOGIN, data);
  }
  
  fetchUser(access_token: string, idToken : any){
		const headers = { 'Authorization': idToken };
    const data = {
			access_token : access_token
		}
    return this.http.post(`${environment.base_url}${this.USER_INFO}`, data, {headers});
  }
  
	public get user(){
		return this.User;
	}

	public setUser(user : any){
		this.User = user;
		this.onUserUpdate.next(user);
	}

	public get token() {
		return this.Token;
  }

  public setTokens(data : any) {
		// console.log('setTokens == > ', data);
		//const refreshToken = data.RefreshToken;
		// localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
		// console.log('setTokens data', data);
		this.Token = data.IdToken;
		this.Access_Token = data.AccessToken
		localStorage.setItem(
			'refreshToken',
			data.RefreshToken
		)
		// console.log(' this.Token == > ', this.Token);
	}
  
	getTokens(refresh_token: string): Observable<any> {		
		const headers =  { 'Authorization': this.Token };
		const data = {
      refresh_token: refresh_token
    }
		return this.http.post(environment.base_url + this.FETCH_TOKEN, data, {headers});
	}

	public refreshToken(minutes: number) {
		return new Observable<any>(
			(subscriber : Subscriber<any>) => {
				interval(1000 * 60 * minutes).subscribe((x : any) => {
					const refreshToken: any = localStorage.getItem(this.REFRESH_TOKEN);
					// console.log('refresh_tok en ==', refreshToken);
					this.getTokens(refreshToken).subscribe((response : any) => {
						subscriber.next(response);
					});
				});
			}
		);
	}

	public startTokenUpdateTimer(time: number) {
		this.refreshToken(time).subscribe((data : any) => {
			// const token = {
      //           IdToken: data.id_token,
      //           RefreshToken: data.RefreshToken
      //       }
			// console.log('startTokenUpdateTimer', token);
			this.setTokens(data);
		});
	}
}
