import { Injectable } from '@angular/core';
import Service from '../service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends Service {

  constructor(private http: HttpClient) {
    super('/activity');
  }

  getById(id: number) {
    const path = `${this.url}/${id}`;
    return this.http.get(path);
  }

}
