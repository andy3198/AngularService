import { Component, OnInit } from '@angular/core';
//import { PeopleService } from './people.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export  class AppComponent implements OnInit{

  title = 'List of all Participants';

  /*peoples;
  people: any;

  constructor(service: PeopleService) {
    this.peoples = service.getPeople()
    this.people = service.getPeople()
  }

  ngOnInit(): void {}

  peopleMale() {
    this.peoples = this.peoples
    this.peoples = this.peoples.filter(people => people.gender == 'Male')
  }

  peopleFemale() {
    this.peoples = this.peoples
    this.peoples = this.peoples.filter(people => people.gender == 'Female')
  }

  peopleAll() {
    this.peoples = this.peoples
  }*/


  //displayedColumns: string[] = ['name', 'agem', 'gender'];
  //dataSource = ELEMENT_DATA;
  model: any;

  constructor() {}


  //name: string;
  //age: number;
  //gender: string;


  ngOnInit() {
    this.model = [
      {
        name: "John Ed Paul Ñunez",
        age:  22,
        gender: "Male"
      },
      {
        name: "Athena Marie Alombro",
        age: 21,
        gender: "Female"
      },
      {
        name: "Melko Cruel",
        age:  21,
        gender: "Male"
      },
      {
        name: "Angel Jabal",
        age:  22,
        gender: "Female"
      },
      {
        name: "Bryle Orivillo",
        age:  20,
        gender: "Male"
      },
      {
        name: "R.A Corage",
        age:  22,
        gender: "Female"
      },
      {
        name: "Glenn Dapitilla",
        age:  20,
        gender: "Male"
      },
      {
        name: "Clear Joy Pitalino",
        age:  22,
        gender: "Female"
      },
      {
        name: "Lord Son Pabriga",
        age:  23,
        gender: "Male"
      },
      {
        name: "Fatima Lumayag",
        age: 21,
        gender: "Female"
      },
    ]
  }
}

/**export interface PeriodicElement {
  name: string;
  age: number;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', age: 1.0079, gender: 'H'},
  {name: 'Helium', age: 4.0026, gender: 'He'},
  {name: 'Lithium', age: 6.941, gender: 'Li'},
  {name: 'Beryllium', age: 9.0122, gender: 'Be'},
  {name: 'Boron', age: 10.811, gender: 'B'},
  {name: 'Carbon', age: 12.0107, gender: 'C'},
  {name: 'Nitrogen', age: 14.0067, gender: 'N'},
  {name: 'Oxygen', age: 15.9994, gender: 'O'},
  {name: 'Fluorine', age: 18.9984, gender: 'F'},
  {name: 'Neon', age: 20.1797, gender: 'Ne'},
];*/
