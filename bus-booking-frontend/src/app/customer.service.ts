import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/v1/customers';
  private loginUrl = 'http://localhost:8080/api/v1/auth/login';

  constructor(private http: HttpClient) {}

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getECustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  login(customer: Object): Observable<any> {
    return this.http.post(`${this.loginUrl}`, customer);
  }
}
