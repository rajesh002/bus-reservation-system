import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private baseUrl = 'http://localhost:8080/api/v1/busreservation/buses';

  constructor(private http: HttpClient) {}

  getBus(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBus(bus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bus);
  }

  updateBus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBusesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
