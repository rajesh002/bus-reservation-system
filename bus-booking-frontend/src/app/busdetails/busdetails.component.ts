import { Bus } from '../bus';
import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../bus.service';
import { AvailablebusesComponent } from '../availablebuses/availablebuses.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css'],
})
export class BusdetailsComponent implements OnInit {
  id: number;
  bus: Bus;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService
  ) {}

  ngOnInit() {
    this.bus = new Bus();

    this.id = this.route.snapshot.params['id'];

    this.busService.getBus(this.id).subscribe(
      (data) => {
        console.log(data);
        this.bus = data;
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(['buses']);
  }
}
