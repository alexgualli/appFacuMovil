import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from 'src/util/config';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService  {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = `${config.server}/api/v1/professional`;
  }
  getById(id: number) {
    const path = `${this.url}/${id}`;
    return this.http.get(path);
  }
}
