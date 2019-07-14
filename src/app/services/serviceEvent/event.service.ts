import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from 'src/util/config';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = `${config.server}/api/v1/event`;
  }

  getAllEvents() {
    const path = `${this.url}s`;
    return this.http.get(path);
  }

  getById(id: number) {
    const path = `${this.url}/${id}`;
    return this.http.get(path);
  }

  getByQr(qr: string) {
    const path = `${this.url}/qr/${qr}`;
    return this.http.get(path);
  }

}
