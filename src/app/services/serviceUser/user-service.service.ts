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
    super('/entrance');
   }

  login(user:User){
    const path = `${this.url}/login`;
    return this.http.put(path,user);
  }


  createUser(user:User){
    const path = `${this.url}/signup`;
    return this.http.post(path,user);
  }
}
