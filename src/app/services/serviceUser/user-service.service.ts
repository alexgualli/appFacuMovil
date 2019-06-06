import { Injectable } from '@angular/core';
import User from 'src/app/pages/entity/user';
import Service from '../service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends Service{

  isLoggedIn = false;
  token:any;
  constructor(private http: HttpClient,
    private storage: NativeStorage) {
    super('/');
   }

  login(rememberMe:boolean,emailAddress:string,password:string){
    const path = `${this.url}entrance/login`;
    return this.http.put(path,{rememberMe,emailAddress,password});
  }


  createUser(user:User){
    const path = `${this.url}entrance/signup`;
    return this.http.post(path,user);
  }

  getUserLoged(){
    const path = `${this.url}account/me`;
    return this.http.get(path);
  }
  signOut(){
    const path = `${this.url}account/logout`;
    return this.http.get(path);
  }
}
