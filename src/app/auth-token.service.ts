import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthTokenService {
  private _auth: boolean = false;
  
  auth$: Observable<boolean>;
  private authSubject: Subject<boolean>;
  
  private cachedToken: string;
  private storageKey = 'psjwt.userToken';
  
  constructor() {
    this.authSubject = new Subject<boolean>();
    this.auth$ = this.authSubject.asObservable();
  }
  
  public setToken(token: string ) : void {
    this.cachedToken = token;
    localStorage.setItem(this.storageKey, token);
    this.authSubject.next(true);  
  }
  
  public getToken() {
    if(!this.cachedToken) {
      this.cachedToken = localStorage.getItem(this.storageKey);
    }
    return this.cachedToken;
  }
  
  public isAuthenticated(): boolean {
    if(this.getToken()) {
      return true;   
    }
    else {
      return false;
    }
  }
  
  public removeToken(): void {
    this.cachedToken = null;
    localStorage.removeItem(this.storageKey);
    this.authSubject.next(false);
  }
  
  // get auth(): boolean {
  //   return this._auth;
  // }
  
  // set auth(auth: boolean) {
  //   this._auth = auth;
  // }
}
