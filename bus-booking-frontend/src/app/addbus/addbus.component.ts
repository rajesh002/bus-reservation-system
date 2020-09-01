import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Bus } from '../bus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css'],
})
export class AddbusComponent implements OnInit {
  bus: Bus = new Bus();
  submitted = false;

  constructor(private busService: BusService, private router: Router) {}

  ngOnInit() {}

  newBus(): void {
    this.submitted = false;
    this.bus = new Bus();
  }

  save() {
    this.busService.createBus(this.bus).subscribe(
      (data) => {
        console.log(this.bus.busFrom, this.bus.name);
        console.log(data);
        this.bus = new Bus();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/addbus']);
  }
}
