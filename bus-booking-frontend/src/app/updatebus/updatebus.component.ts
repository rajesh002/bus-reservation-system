import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css'],
})
export class UpdatebusComponent implements OnInit {
  id: number;
  bus: Bus;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService
  ) {}

  ngOnInit() {
    this.bus = new Bus();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];

    this.busService.getBus(this.id).subscribe(
      (data) => {
        console.log(data);
        this.bus = data;
      },
      (error) => console.log(error)
    );
  }

  updateBus() {
    this.busService.updateBus(this.id, this.bus).subscribe(
      (data) => {
        console.log(data);
        this.bus = new Bus();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.updateBus();
  }

  gotoList() {
    this.router.navigate(['/buses']);
  }
}
