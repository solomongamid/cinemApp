import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
	
@Injectable()
export class AuthService {

	authToken: any;
	user: any;

  constructor(private http:Http) { }

    registerUser(user){
	    let headers = new Headers();
	    headers.append('Content-Type','application/json');
	    //let ep = this.prepEndpoint('users/register');
	    //return this.http.post(ep, user,{headers: headers});
	    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
	      .map(res => res.json());
	}

}
