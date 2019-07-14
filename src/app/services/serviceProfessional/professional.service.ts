import { Injectable } from '@angular/core';
import Service from '../service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService extends Service {

  constructor(private http: HttpClient) {
    super('/professional');
  }
  getById(id: number) {
    const path = `${this.url}/${id}`;
    return this.http.get(path);
  }
}
