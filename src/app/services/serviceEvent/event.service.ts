import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Service from '../service';


@Injectable({
  providedIn: 'root'
})
export class EventService extends Service {

  constructor(private http: HttpClient) {
      super('/event');
   }

  getAllEvents() {
    const path = `${this.url}s`;
    return this.http.get(path);
  }

  getById(id: number) {
    const path = `${this.url}/${id}`;
    return this.http.get(path);
  }

  getByQr(qr:string){
    const path = `${this.url}/qr/${qr}`;
    return this.http.get(path);
  }

}
