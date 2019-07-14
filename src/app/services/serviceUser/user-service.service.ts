import { Injectable } from '@angular/core';
import User from 'src/app/pages/entity/user';
import config from 'src/util/config'
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  isLoggedIn = false;
  token: any;

  private url: string;
  constructor(private http: HttpClient) {
    this.url = `${config.server}/api/v1/`;
  }

  login(rememberMe: boolean, emailAddress: string, password: string) {
    const path = `${this.url}entrance/login`;
    return this.http.put(path, { rememberMe, emailAddress, password });
  }


  createUser(user: User) {
    const path = `${this.url}entrance/signup`;
    return this.http.post(path, user);
  }

  getUserLoged() {
    const path = `${this.url}account/me`;
    return this.http.get(path);
  }
  signOut() {
    const path = `${this.url}account/logout`;
    return this.http.get(path);
  }
}
