import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/v1/busreservation/reservation';

  constructor(private http: HttpClient) {}

  getTiming(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTiming(reservation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, reservation);
  }

  // updateEmployee(id: number, value: any): Observable<Object> {
  //     return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getEmployeesList(): Observable<any> {
  //     return this.http.get(`${this.baseUrl}`);
  // }
}
