import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public myAge;

  constructor() { }

  ngOnInit(): void {
    this.myAge = this.getAge('1991-08-10');    // my DOB
    // console.log("My Age: ", this.myAge)
  }

  getAge(birthDate) {
    return Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e+10);
  }

}
