import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-directives',
  templateUrl: './exercise-directives.component.html',
  styleUrls: ['./exercise-directives.component.css']
})
export class ExerciseDirectivesComponent implements OnInit {

  visiblePassw = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  // togglePassw() {
  //   this.visiblePassw = !this.visiblePassw;
  // }

   incrementNumber() {
     this.clicks.push(this.clicks.length + 1);
   }

  //  getColor() {
  //    return this.clicks.length > 5 ? 'blue' : 'transparent';
  //  }
}

// push a new Date (timestamp)
// it's always true because a string is always > 5
