import { Injectable } from '@angular/core';
import User from 'src/app/pages/entity/user';
import Service from '../service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends Service{

  constructor(private http:HttpClient) {
    super('/entrance/singup');
   }

  createUser(user:User){
    const path = `${this.url}s`;
    return this.http.put(path,user);
  }
}
