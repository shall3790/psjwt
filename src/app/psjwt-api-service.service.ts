import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthTokenService } from './auth-token.service';

//import '../../rxjs-operators';
//import 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class PsjwtApiServiceService {
  private _starshipUrl: string = 'https://qasecure.hobbylobby.corp/starship/api/';
  private _url = 'http://localhost:3000/';
  
  constructor(private _http: Http, private _authToken : AuthTokenService) {
    console.debug('service init...');
  }
  
  public register(email: string, password: string): Observable<any>{
        var method = 'register';
        let body = JSON.stringify({
                email: email,
                password: password
            });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._url+method, body, options)
            .map(this.extractData)
            .catch(this.handleError);
            
        // return this._http.get(this._url + method, {search: params})
        //     .map(this.extractData)
        //     .do(data => { })
        //     .catch(this.handleError);
    } 
    
    public getJobs(): Observable<any> {
        var method = 'jobs';
        let headers = new Headers();
        // 
        if(this._authToken.isAuthenticated()) {
            //let headers = new Headers({
            headers.append('Authorization', 'Bearer ' + this._authToken.getToken());
        }
        
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._url + method, options)
            //.map((response: Response) => {
            //    return <Chain[]>response.json();
            //})
            .map(this.extractData)
            .do(data => {})
            .catch(this.handleError);
    } 
  
  public getChains(): Observable<any> {
    var method = 'chains';
    
    return this._http.get(this._starshipUrl + method)
        //.map((response: Response) => {
        //    return <Chain[]>response.json();
        //})
        .map(this.extractData)
        .do(data => {})
        .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

  private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        //alert("Error: "+ errMsg);    
        console.error(errMsg, this);
        return Observable.throw(errMsg);
    }
}
