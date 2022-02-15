import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import * as moment from "moment";
import {User} from "./models/user";
import {shareReplay, tap} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
    return this.http.post<User>('http://localhost:5000/auth/login', {username, password})
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay(),
      )
  }

  private setSession(authResult : any) {
    //console.log(JSON.stringify(authResult));
    const expiresAt = moment().add(atob(authResult.access_token.split('.')[0])[6],'second');

    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration : any = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }




}

