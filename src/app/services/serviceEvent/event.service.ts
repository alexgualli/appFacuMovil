import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) { }

  getAllEvents() {
    const path = `${this.url}/event`;
    return this.http.get(path);
  }

  getById(id: number) {
    const path = `${this.url}/event/${id}`;
    return this.http.get(path);
  }

  getImage(id: number) {
    const path = `http://localhost:8080/file/image/${id}`;
    return this.http.get(path);
  }


}
