import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  @Input() rental:any

  constructor() { }

  ngOnInit() {
  }

}
