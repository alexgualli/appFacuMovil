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

   login(email: String, password: String) {
    return this.http.post(this.url+'/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }


  createUser(user:User){
    const path = `${this.url}s`;
    return this.http.post(path,user);
  }
}
