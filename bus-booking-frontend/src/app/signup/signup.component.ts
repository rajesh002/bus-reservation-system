import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {}

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    console.log(this.customer.phoneNumber);
    this.customerService.createCustomer(this.customer).subscribe(
      (data) => {
        console.log(data);
        this.customer = new Customer();
        // this.gotoList();
      },
      (error) => console.log('This is i am getting ', error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigateByUrl('customers');
  }
}
