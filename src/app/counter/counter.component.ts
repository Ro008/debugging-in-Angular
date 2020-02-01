import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterId = 10;
  counterStatus = 'off';

  constructor() {
    this.counterStatus = Math.random() > 0.5 ? 'on' : 'off';
  }

  getCounterStatus() {
    return this.counterStatus;
  }

  getColor() {
    return this.counterStatus === 'on' ? 'green' : 'red';
  }
}
