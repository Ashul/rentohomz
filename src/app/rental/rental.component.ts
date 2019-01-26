import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  rentals:any = [1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
