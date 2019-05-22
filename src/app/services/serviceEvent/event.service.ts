import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class EventService {

  url='http://172.30.3.233:8080/api/v1';
  constructor(private http:HttpClient) { }

  getAllEvents(){
    const path=`${this.url}/event`;
     return this.http.get(path);
  }
}
