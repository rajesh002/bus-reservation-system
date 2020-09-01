import { CustomerService } from '../customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {}

  newEmployee(): void {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.customerService.login(this.customer).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        if (data.role == 'admin') {
          this.router.navigate(['/admin']);
          return;
        }
        this.router.navigate(['/customerview']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
