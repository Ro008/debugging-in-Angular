import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  allowNewCounter = false;
  counterCreationStatus = 'No counter was created yet';
  counterName = 'test name';
  counterCreated = false;
  counters = ['Work hours counter', 'Study hours counter'];

  constructor() {
    setTimeout(() => {
      this.allowNewCounter = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateCounter() {
    this.counterCreationStatus = 'A counter was created! Its name is ' + this.counterName;
    this.counterCreated = true;
    this.counters.push(this.counterName);
  }

  // onUpdateCounterName(event) {
  //   this.counterName = event.target.value;
  // }
}
