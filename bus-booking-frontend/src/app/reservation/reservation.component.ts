import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bus } from '../bus';
import { Observable } from 'rxjs';
import { BusService } from '../bus.service';
import { TimingService } from '../services/timing.service';
import { Timing } from '../services/timing';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  bus: Observable<Bus[]>;
  reservation: Reservation = new Reservation();
  availabletimes: Observable<Timing[]>;

  submitted = false;

  constructor(
    private reservationService: ReservationService,
    private busService: BusService,
    private timingService: TimingService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reservation.customerId = 2;
    this.activatedRoute.params.subscribe((data) => {
      this.reservation.busId = data['id'];
    });
    this.reloadBuses();
  }

  reloadBuses() {
    this.bus = this.busService.getBusesList();
  }

  fetchAvailableTimesForBus(): void {
    this.availabletimes = this.timingService.getAvaiableTimesForBus(
      this.reservation.busId,
      this.reservation.date
    );
  }

  newBus(): void {
    this.submitted = false;
    this.reservation = new Reservation();
  }

  save() {
    // this.reservation.customerId = 12;
    this.reservationService.createTiming(this.reservation).subscribe(
      (data) => {
        console.log(data, 'after adding reservation');
        this.reservation = new Reservation();
        // this.gotoList();
        this.reservation.id = data['id'];
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoUserPage() {
    this.router.navigate(['/customerview']);
  }
}
