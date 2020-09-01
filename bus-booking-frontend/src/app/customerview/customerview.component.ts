import { Component, OnInit } from '@angular/core';
import { BusdetailsComponent } from './../busdetails/busdetails.component';
import { Observable } from 'rxjs';
import { BusService } from './../bus.service';
import { Bus } from './../bus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css'],
})
export class CustomerviewComponent implements OnInit {
  bus: Observable<Bus[]>;

  constructor(private busService: BusService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bus = this.busService.getBusesList();
  }

  deleteBus(id: number) {
    this.busService.deleteBus(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  // busDetails(id: number) {
  //   this.router.navigate(['busdetails', id]);
  // }

  reservation(id: number) {
    this.router.navigate(['reservation', id]);
  }
}
