import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//import '../../rxjs-operators';
//import 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class PsjwtApiServiceService {
  private _starshipUrl: string = 'https://qasecure.hobbylobby.corp/starship/api/';
  private _url = 'http://localhost:3000/';
  
  constructor(private _http: Http) {
    console.debug('service init...');
  }
  
  public register(name: string): Observable<any>{
    
        var method = 'register';
        let body = JSON.stringify({
                name: name
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
        console.error(errMsg, this);
        return Observable.throw(errMsg);
    }
}
