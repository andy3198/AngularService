import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.male.html',
  styleUrls: ['./app.component.css']
})

export  class MaleComponent implements OnInit {

  title = 'List Of Male';

  model: any;

  constructor() {}

  ngOnInit() {
    this.model = [
      {
        name: "John Ed Paul Ñunez",
        age:  22,
        gender: "Male"
      },
      {
        name: "Melko Cruel",
        age:  21,
        gender:"Male"
      },
      {
        name: "Bryle Orivillo",
        age:  20,
        gender: "Male"
      },
      {
        name: "Glenn Dapitilla",
        age:  20,
        gender: "Male"
      },
      {
        name: "Lord Son Pabriga",
        age:  23,
        gender: "Male"
      },
    ]
  }

}
