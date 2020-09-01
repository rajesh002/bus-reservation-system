import { Component, OnInit } from '@angular/core';
import { TimingService } from '../services/timing.service';
import { Timing } from '../services/timing';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css'],
})
export class TimingComponent implements OnInit {
  timing: Timing = new Timing();

  submitted = false;
  constructor(private timingService: TimingService) {}

  ngOnInit() {}

  save(): void {
    console.log(this.timing.timing);
    this.timingService.createTiming(this.timing).subscribe(
      (data) => {
        this.submitted = true;
        console.log('timing added');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit(): void {
    this.save();
  }
}
