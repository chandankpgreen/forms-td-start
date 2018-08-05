import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise-component',
  templateUrl: './exercise-component.component.html',
  styleUrls: ['./exercise-component.component.css']
})
export class ExerciseComponentComponent implements OnInit {

  subscription = 'advanced';
  @ViewChild('f') thisForm: NgForm;
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
  }
}
