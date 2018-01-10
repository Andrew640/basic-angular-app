import { Component, OnInit } from '@angular/core';

import FlatbondService from '../services/flatbond.service';

@Component({
  selector: 'app-flatbonds',
  templateUrl: './flatbonds.component.html',
  styleUrls: ['./flatbonds.component.scss']
})
export class FlatbondsComponent implements OnInit {

  constructor(public flatbondService: FlatbondService) {}

  filterClicked = false;
  statusSelected = false;
  flatbonds;
  dates = [];
  year: any;
  month: any;
  day: any;

  ngOnInit() {
    this.flatbondService.getFlatbonds().subscribe(flatbonds => {
      this.flatbonds = flatbonds;

      for (const flatbond of this.flatbonds ) {
        const date = new Date(flatbond.expiry_date);
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();

        if (this.day < 10) {
          this.day = '0' + this.day;
        }
        if (this.month < 10) {
          this.month = '0' + this.month;
        }
        this.year = this.year - 2000;
        flatbond.expiry_date = this.day + ' / ' + this.month + ' / ' + this.year;
      }
    });
  }

  createFlatbond(flatbond) {
    this.flatbondService.getFlatbonds().subscribe(flatbonds => this.flatbonds.push(
      {
        id: this.flatbonds.length + 1,
        address: this.flatbonds[Math.floor(Math.random() * 20) + 1].address,
        expiry_date: this.flatbonds[Math.floor(Math.random() * 20) + 1].expiry_date,
        status: this.flatbonds[Math.floor(Math.random() * 20) + 1].status
      }
    ));
  }

  filter() {
    this.filterClicked = !this.filterClicked;
    this.statusSelected = false;
  }

  status() {
    this.filterClicked = false;
    this.statusSelected = true;
  }

}
