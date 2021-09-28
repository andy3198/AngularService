import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.female.html',
  styleUrls: ['./app.component.css']
})

export  class FemaleComponent implements OnInit {

  title = 'List Of Female';


  model: any;

  constructor() {}

  toggleDisplay() {

  }

  ngOnInit() {
    this.model = [
      {
        name: "Athena Marie Alombro",
        age:  21,
        gender: "Female"
      },
      {
        name: "Angel Jabal",
        age:  22,
        gender: "Female"
      },
      {
        name: "R.A Corage",
        age:  22,
        gender: "Female"
      },
      {
        name: "Clear Joy Pitalino",
        age:  22,
        ender:  "Female"
      },
      {
        name: "Fatima Lumayag",
        age:  21,
        gender: "Female"
      },
    ]
  }

}
