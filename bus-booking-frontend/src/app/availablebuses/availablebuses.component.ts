import { Component, OnInit } from '@angular/core';
import { BusdetailsComponent } from './../busdetails/busdetails.component';
import { Observable } from 'rxjs';
import { BusService } from './../bus.service';
import { Bus } from './../bus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availablebuses',
  templateUrl: './availablebuses.component.html',
  styleUrls: ['./availablebuses.component.css'],
})
export class AvailablebusesComponent implements OnInit {
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

  busDetails(id: number) {
    this.router.navigate(['busdetails', id]);
  }

  updateBus(id: number) {
    this.router.navigate(['update', id]);
  }
}
