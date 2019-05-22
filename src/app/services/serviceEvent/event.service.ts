import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import  'rxjs/add/operator/catch';

import  {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  url='http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

  getAllEvents(){
    const path=`${this.url}/event`;
     return this.http.get(path);
  }
  
  evento:any;
  getById(id:number){
    const path=`${this.url}/event/${id}`;

    console.log('Service RESULT: '+path);

    return  this.http.get(path);

    
    
    }
}
