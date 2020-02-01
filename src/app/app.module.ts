import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CountersComponent } from './counters/counters.component';
import { ExerciseDatabindingComponent } from './exercise-databinding/exercise-databinding.component';
import { ExerciseDirectivesComponent } from './exercise-directives/exercise-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CountersComponent,
    ExerciseDatabindingComponent,
    ExerciseDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
